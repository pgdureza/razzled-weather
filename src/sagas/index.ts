import { all, fork } from 'redux-saga/effects'

import { weatherSagas } from './weather'

export function* rootSaga() {
  yield all([...weatherSagas].map((saga) => fork(saga)))
}
