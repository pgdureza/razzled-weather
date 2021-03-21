import React from 'react'

import { injectGlobal } from '@emotion/css'
import Home from '@pages/Home'
import { Route, Switch } from 'react-router-dom'

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
