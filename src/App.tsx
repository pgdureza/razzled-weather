import React from 'react'

import { injectGlobal } from '@emotion/css'
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
  <Switch>
    <Route exact={true} path="/" component={Home} />
  </Switch>
)

export default App
