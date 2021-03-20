import { getRequest } from '@lib/network'
import {
  fetchWeatherByCityNames,
  fetchWeatherError,
  fetchWeatherSuccess,
  FetchWeatherTypes,
  IWeatherData,
} from '@store/weather'
import { all, call, delay, put, takeLatest } from 'redux-saga/effects'

export const getURL = (q: string, appId: string) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appId}&units=metric`

export function* handleWeatherFetchByCityName(action: ReturnType<typeof fetchWeatherByCityNames>) {
  try {
    while (true) {
      const dataList: IWeatherData[] = yield all(
        action.payload.map((q) =>
          call(getRequest, getURL(q, process.env.RAZZLE_RUNTIME_OPEN_WEATHER_KEY)),
        ),
      )
      yield put(fetchWeatherSuccess(dataList))
      yield delay(60000)
    }
  } catch (error) {
    yield put(
      fetchWeatherError(new Error(error?.response?.data?.message || 'Oops! Something went wrong.')),
    )
  }
}

export function* watchWeatherFetchByCityName() {
  yield takeLatest(FetchWeatherTypes.FETCH_BY_CITY_NAMES, handleWeatherFetchByCityName)
}
