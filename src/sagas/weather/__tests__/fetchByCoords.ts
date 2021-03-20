import { getRequest } from '@lib/network'
import { call, delay, put } from '@redux-saga/core/effects'
import {
  fetchWeatherError,
  fetchWeatherSuccess,
  FetchWeatherTypes,
  IWeatherData,
} from '@store/weather'

import { getURL, handleWeatherFetchByCoords } from '../fetchByCoords'

const payload = { lat: 10, lon: 20 }

describe('handleWeatherFetchByCoords - success', () => {
  const generator: Generator = handleWeatherFetchByCoords({
    type: FetchWeatherTypes.FETCH_BY_CITY_NAMES,
    payload,
  })

  it('does a call for current lat and lon', () => {
    expect(generator.next().value).toEqual(call(getRequest, getURL(payload.lat, payload.lon)))
  })

  it('dispatches fetchWeatherSuccess', () => {
    const mockResponse = {} as IWeatherData
    expect(generator.next(mockResponse).value).toEqual(put(fetchWeatherSuccess([mockResponse])))
  })

  it('waits for 1 minutes then repeats fetch for city names', () => {
    expect(generator.next().value).toEqual(delay(60000))
  })

  it('repeats after 1 minute and calls for the same lat and lon', () => {
    expect(generator.next().value).toEqual(call(getRequest, getURL(payload.lat, payload.lon)))
  })

  it('dispatches fetchWeatherSuccess again', () => {
    const mockResponse = {} as IWeatherData
    expect(generator.next(mockResponse).value).toEqual(put(fetchWeatherSuccess([mockResponse])))
  })

  it('repeats', () => {
    const result = generator.next().done
    expect(result).toBe(false)
  })
})

describe('handleWeatherFetchByCoords - error', () => {
  const generator: Generator = handleWeatherFetchByCoords({
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
