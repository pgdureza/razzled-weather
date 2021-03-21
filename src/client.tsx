/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line simple-import-sort/imports
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'

import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './configureStore'

import App from './App'
import { Provider } from 'react-redux'

const { store } = configureStore((window as any).__INITIAL_STATE__)

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
