import { FetchWeatherTypes, ICoord } from '@store/weather'

import { IWeatherData } from './types'

export const fetchWeatherByCoords = (coords: ICoord) => ({
  type: FetchWeatherTypes.FETCH_BY_COORDS,
  payload: coords,
})

export const fetchWeatherByCityNames = (cityNames: string[]) => ({
  type: FetchWeatherTypes.FETCH_BY_CITY_NAMES,
  payload: cityNames,
})

export const fetchWeatherSuccess = (data: IWeatherData) => ({
  type: FetchWeatherTypes.FETCH_SUCCESS,
  payload: data,
})

export const fetchWeatherError = (error: Error) => ({
  type: FetchWeatherTypes.FETCH_ERROR,
  payload: error,
})
