/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line simple-import-sort/imports
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'

import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import store from 'configureStore'
import { Provider } from 'react-redux'

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept()
}
