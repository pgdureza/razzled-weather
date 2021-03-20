import React from 'react'

import { injectGlobal } from '@emotion/css'
import loadable from '@loadable/component'
import store from 'configureStore'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import './styles/reset.css'
injectGlobal`
 html {
  font-family: 'league-gothic', sans-serif;
 }
`

const HomePage = loadable(() => import('@pages/Home'))

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
    </Switch>
  </Provider>
)

export default App
