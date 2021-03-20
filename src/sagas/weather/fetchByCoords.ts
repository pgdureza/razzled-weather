import { getRequest } from '@lib/network'
import {
  fetchWeatherByCoords,
  fetchWeatherError,
  fetchWeatherSuccess,
  FetchWeatherTypes,
  IWeatherData,
} from '@store/weather'
import { call, delay, put, takeLatest } from 'redux-saga/effects'

export const getURL = (lat: number, lon: number, appId: string) =>
  `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`

export function* handleWeatherFetchByCoords(action: ReturnType<typeof fetchWeatherByCoords>) {
  try {
    while (true) {
      const { lat, lon } = action.payload
      const data: IWeatherData = yield call(
        getRequest,
        getURL(lat, lon, process.env.RAZZLE_RUNTIME_OPEN_WEATHER_KEY),
      )
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
