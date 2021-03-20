import {
  fetchWeatherByCityNames,
  fetchWeatherError,
  fetchWeatherSuccess,
  FetchWeatherTypes,
  IWeatherData,
} from '@store/weather'
import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* handleWeatherFetchByCityName(action: ReturnType<typeof fetchWeatherByCityNames>) {
  try {
    const q = action.payload
    const { data }: { data: IWeatherData } = yield call(
      axios.get,
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${process.env.RAZZLE_RUNTIME_OPEN_WEATHER_KEY}&units=metric`,
    )
    yield put(fetchWeatherSuccess(data))
  } catch (error) {
    yield put(fetchWeatherError(error))
  }
}

export function* watchWeatherFetchByCityName() {
  yield takeLatest(FetchWeatherTypes.FETCH_BY_CITY_NAMES, handleWeatherFetchByCityName)
}
