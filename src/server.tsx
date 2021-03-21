/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import axios from 'axios'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import App from './App'
import configureStore from './configureStore'

let assets: any

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!)
}
syncLoadAssets()

const cssLinksFromAssets = (assets, entrypoint) => {
  return assets[entrypoint]
    ? assets[entrypoint].css
      ? assets[entrypoint].css.map((asset) => `<link rel="stylesheet" href="${asset}">`).join('')
      : ''
    : ''
}

const jsScriptTagsFromAssets = (assets, entrypoint, extra = '') => {
  return assets[entrypoint]
    ? assets[entrypoint].js
      ? assets[entrypoint].js.map((asset) => `<script src="${asset}"${extra}></script>`).join('')
      : ''
    : ''
}

export const renderApp = (req: express.Request, res: express.Response) => {
  const context: any = {}

  const { store } = configureStore({})
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </Provider>,
  )

  if (context.url) {
    return { redirect: context.url }
  } else {
    const html =
      // prettier-ignore
      `<!doctype html>
        <html lang="">
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet='utf-8' />
            <link rel="dns-prefetch" href="https://use.typekit.net/" >
            <link rel="dns-prefetch" href="http://api.openweathermap.org" >
            <link rel="stylesheet" href="https://use.typekit.net/fnb4ppj.css">
            <title>Just Another Weather App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${cssLinksFromAssets(assets, 'client')}
        </head>
        <body>
            <div id="root">${markup}</div>
            ${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
        </body>
      </html>`
    return { html }
  }
}

const URL_TEMPLATE = `https://api.openweathermap.org/data/2.5/weather?{searchParams}&appid=${process.env.OPEN_WEATHER_KEY}&units=metric`

const server = express()
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/api/getWeather', async (req: express.Request, res: express.Response) => {
    let url
    if (req.query.city) {
      url = URL_TEMPLATE.replace('{searchParams}', `q=${req.query.city}`)
    } else if (req.query.lat && req.query.lon) {
      url = URL_TEMPLATE.replace(
        '{searchParams}',
        `lat=${req.query.lat}&lat=${req.query.lat}&lon=${req.query.lon}`,
      )
    }
    const response = await axios.get(url)
    res.status(200).json(response.data)
  })
  .get('/*', (req: express.Request, res: express.Response) => {
    const { html = '', redirect = false } = renderApp(req, res)
    if (redirect) {
      res.redirect(redirect)
    } else {
      res.send(html)
    }
  })

export default server
