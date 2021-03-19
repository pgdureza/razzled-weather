import React from 'react'

import { injectGlobal } from '@emotion/css'
import loadable from '@loadable/component'
import { Route, Switch } from 'react-router-dom'

import './styles/reset.css'
injectGlobal`
 html {
  font-family: 'league-gothic', sans-serif;
 }
`

const HomePage = loadable(() => import('@pages/Home'))

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={HomePage} />
  </Switch>
)

export default App
