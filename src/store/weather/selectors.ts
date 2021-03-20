import { IApplicationState } from '@store'
import { createSelector } from 'reselect'

const selectWeather = (state: IApplicationState) => state.weather

export const selectIsFetching = createSelector(selectWeather, (weather) => weather.isFetching)

export const selectWeatherData = createSelector(selectWeather, (weather) => weather.weatherData)

export const selectWeatherError = createSelector(selectWeather, (weather) => weather.error)
