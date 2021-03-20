import { watchWeatherFetchByCityName } from './fetchByCityName'
import { watchWeatherFetchByCoords } from './fetchByCoords'

export const weatherSagas: ReadonlyArray<() => Generator> = [
  watchWeatherFetchByCityName,
  watchWeatherFetchByCoords,
]
