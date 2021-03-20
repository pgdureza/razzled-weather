import { FetchWeatherTypes, IWeatherState, weatherReducer } from '@store/weather'

import { IWeatherData } from '../types'

const initialState: IWeatherState = {
  isFetching: false,
  weatherData: [],
  error: null,
}

describe('when fetching weather using city names', () => {
  it('updates isFetching to true', () => {
    const actual: IWeatherState = weatherReducer(initialState, {
      type: FetchWeatherTypes.FETCH_BY_CITY_NAMES,
    })
    expect(actual).toEqual({ ...initialState, isFetching: true })
  })
})

describe('when fetching weather using coordinates', () => {
  it('updates isFetching to true', () => {
    const actual: IWeatherState = weatherReducer(initialState, {
      type: FetchWeatherTypes.FETCH_BY_COORDS,
    })
    expect(actual).toEqual({ ...initialState, isFetching: true })
  })
})

describe('when fetching weather was successful', () => {
  it('updates then store weatherData with the response and sets isFetching to false', () => {
    const mockResponse = [{} as IWeatherData]
    const actual: IWeatherState = weatherReducer(initialState, {
      type: FetchWeatherTypes.FETCH_SUCCESS,
      payload: mockResponse,
    })
    expect(actual).toEqual({ ...initialState, isFetching: false, weatherData: mockResponse })
  })
})

describe('when fetching error occured', () => {
  it('updates then store weatherData with the response and sets isFetching to false', () => {
    const error = new Error('error')
    const actual: IWeatherState = weatherReducer(initialState, {
      type: FetchWeatherTypes.FETCH_ERROR,
      payload: error,
    })
    expect(actual).toEqual({ ...initialState, error: error })
  })
})
