import React from 'react'

import { injectGlobal } from '@emotion/css'
import loadable from '@loadable/component'
import store from 'configureStore'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Home from '@pages/Home'

import './styles/reset.css'
injectGlobal`
 html {
  font-family: 'league-gothic', sans-serif;
 }
`

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  </Provider>
)

export default App
