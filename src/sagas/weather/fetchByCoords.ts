import {
  fetchWeatherByCoords,
  fetchWeatherError,
  fetchWeatherSuccess,
  FetchWeatherTypes,
  IWeatherData,
} from '@store/weather'
import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* handleWeatherFetchByCoords(action: ReturnType<typeof fetchWeatherByCoords>) {
  try {
    const { lat, lon } = action.payload
    const { data }: { data: IWeatherData } = yield call(
      axios.get,
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.RAZZLE_RUNTIME_OPEN_WEATHER_KEY}&units=metric`,
    )
    yield put(fetchWeatherSuccess(data))
  } catch (error) {
    yield put(fetchWeatherError(error))
  }
}

export function* watchWeatherFetchByCoords() {
  yield takeLatest(FetchWeatherTypes.FETCH_BY_COORDS, handleWeatherFetchByCoords)
}
