import { getRequest } from '@lib/network'
import { all, call, delay, put } from '@redux-saga/core/effects'
import {
  fetchWeatherError,
  fetchWeatherSuccess,
  FetchWeatherTypes,
  IWeatherData,
} from '@store/weather'

import { getURL, handleWeatherFetchByCityName } from '../fetchByCityName'

const payload = ['manila', 'tokyo', 'iloilo']

describe('handleWeatherFetchByCityName - success', () => {
  const generator: Generator = handleWeatherFetchByCityName({
    type: FetchWeatherTypes.FETCH_BY_CITY_NAMES,
    payload,
  })

  it('does a call for all the city names', () => {
    expect(generator.next().value).toEqual(
      all([
        call(getRequest, getURL('manila', process.env.RAZZLE_RUNTIME_OPEN_WEATHER_KEY)),
        call(getRequest, getURL('tokyo', process.env.RAZZLE_RUNTIME_OPEN_WEATHER_KEY)),
        call(getRequest, getURL('iloilo', process.env.RAZZLE_RUNTIME_OPEN_WEATHER_KEY)),
      ]),
    )
  })

  it('dispatches fetchWeatherSuccess', () => {
    const mockResponse = [{} as IWeatherData]
    expect(generator.next(mockResponse).value).toEqual(put(fetchWeatherSuccess(mockResponse)))
  })

  it('waits for 1 minutes then repeats fetch for city names', () => {
    expect(generator.next().value).toEqual(delay(60000))
  })

  it('repeats after 1 minute and calls for all the city names', () => {
    expect(generator.next().value).toEqual(
      all([
        call(getRequest, getURL('manila', process.env.RAZZLE_RUNTIME_OPEN_WEATHER_KEY)),
        call(getRequest, getURL('tokyo', process.env.RAZZLE_RUNTIME_OPEN_WEATHER_KEY)),
        call(getRequest, getURL('iloilo', process.env.RAZZLE_RUNTIME_OPEN_WEATHER_KEY)),
      ]),
    )
  })

  it('dispatches fetchWeatherSuccess again', () => {
    const mockResponse = [{} as IWeatherData]
    expect(generator.next(mockResponse).value).toEqual(put(fetchWeatherSuccess(mockResponse)))
  })

  it('repeats', () => {
    const result = generator.next().done
    expect(result).toBe(false)
  })
})

describe('handleWeatherFetchByCityName - error', () => {
  const generator: Generator = handleWeatherFetchByCityName({
    type: FetchWeatherTypes.FETCH_BY_CITY_NAMES,
    payload,
  })

  it('dispatches FAILURE action to store on error', () => {
    const error = new Error('Oops! Something went wrong.')
    if (generator.throw && generator.next()) {
      expect(generator.throw(error).value).toEqual(put(fetchWeatherError(error)))
    }
  })
})
