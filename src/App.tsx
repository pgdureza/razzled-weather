import React from 'react'

import Home from '@pages/Home'
import { Route, Switch } from 'react-router-dom'

import './styles/reset.css'
import './styles/index.css'

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
  </Switch>
)

export default App
