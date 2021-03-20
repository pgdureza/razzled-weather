import { getRequest } from '@lib/network'
import {
  fetchWeatherByCoords,
  fetchWeatherError,
  fetchWeatherSuccess,
  FetchWeatherTypes,
  IWeatherData,
} from '@store/weather'
import { call, delay, put, takeLatest } from 'redux-saga/effects'

export const getURL = (lat: number, lon: number) => `api/getWeather?lat=${lat}&lon=${lon}`

export function* handleWeatherFetchByCoords(action: ReturnType<typeof fetchWeatherByCoords>) {
  try {
    while (true) {
      const { lat, lon } = action.payload
      const data: IWeatherData = yield call(getRequest, getURL(lat, lon))
      yield put(fetchWeatherSuccess([data]))
      yield delay(60000)
    }
  } catch (error) {
    yield put(
      fetchWeatherError(new Error(error?.response?.data?.message || 'Oops! Something went wrong.')),
    )
  }
}

export function* watchWeatherFetchByCoords() {
  yield takeLatest(FetchWeatherTypes.FETCH_BY_COORDS, handleWeatherFetchByCoords)
}
