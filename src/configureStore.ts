import { rootSaga } from '@sagas/index'
import rootReducer, { IApplicationState } from '@store'
import { applyMiddleware, compose, createStore, Middleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

const configureStore = (state: Partial<IApplicationState> = {}) => {
  let composeEnhancers = compose
  const loggerMiddleware = createLogger({ collapsed: true })
  const sagaMiddleware = createSagaMiddleware()

  let middlewares: ReadonlyArray<Middleware> = [sagaMiddleware]

  if (process.env.NODE_ENV === 'development') {
    middlewares = middlewares.concat(loggerMiddleware)
    composeEnhancers = composeWithDevTools({})
  }

  const store = createStore(rootReducer, state, composeEnhancers(applyMiddleware(...middlewares)))

  const runningSaga = sagaMiddleware.run(rootSaga)

  return { store, runningSaga }
}

export default configureStore
