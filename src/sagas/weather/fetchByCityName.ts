import _axios from '@lib/network'
import {
  fetchWeatherByCityNames,
  fetchWeatherError,
  fetchWeatherSuccess,
  FetchWeatherTypes,
  IWeatherData,
} from '@store/weather'
import { all, call, put, takeLatest } from 'redux-saga/effects'

export function* handleWeatherFetchByCityName(action: ReturnType<typeof fetchWeatherByCityNames>) {
  try {
    const responses: { data: IWeatherData }[] = yield all(
      action.payload.map((q) =>
        call(
          _axios.get,
          `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${process.env.RAZZLE_RUNTIME_OPEN_WEATHER_KEY}&units=metric`,
        ),
      ),
    )
    const dataList = responses.map((response) => response.data)
    yield put(fetchWeatherSuccess(dataList))
  } catch (error) {
    yield put(fetchWeatherError(error))
  }
}

export function* watchWeatherFetchByCityName() {
  yield takeLatest(FetchWeatherTypes.FETCH_BY_CITY_NAMES, handleWeatherFetchByCityName)
}
