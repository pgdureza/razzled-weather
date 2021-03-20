import {
  fetchWeatherByCityNames,
  fetchWeatherByCoords,
  fetchWeatherError,
  fetchWeatherSuccess,
} from '../actions'
import { FetchWeatherTypes, IWeatherData } from '../types'

describe('fetchWeatherByCoords', () => {
  it('dispatches the correct action shape', () => {
    expect(fetchWeatherByCoords({ lon: 10, lat: 11 })).toEqual({
      type: FetchWeatherTypes.FETCH_BY_COORDS,
      payload: { lon: 10, lat: 11 },
    })
  })
})

describe('fetchWeatherByCityNames', () => {
  it('dispatches the correct action shape', () => {
    expect(fetchWeatherByCityNames(['manila', 'tokyo'])).toEqual({
      type: FetchWeatherTypes.FETCH_BY_CITY_NAMES,
      payload: ['manila', 'tokyo'],
    })
  })
})

describe('fetchWeatherSuccess', () => {
  it('dispatches the correct action shape', () => {
    const mockResponse = [{} as IWeatherData]
    expect(fetchWeatherSuccess(mockResponse)).toEqual({
      type: FetchWeatherTypes.FETCH_SUCCESS,
      payload: mockResponse,
    })
  })
})

describe('fetchWeatherError', () => {
  it('dispatches the correct action shape', () => {
    const error = new Error('test')
    expect(fetchWeatherError(error)).toEqual({
      type: FetchWeatherTypes.FETCH_ERROR,
      payload: error,
    })
  })
})
