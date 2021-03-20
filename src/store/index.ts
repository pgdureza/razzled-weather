import { IWeatherState, weatherReducer } from '@store/weather'
import { combineReducers } from 'redux'

interface IApplicationState {
  weather: IWeatherState
}

export type { IApplicationState }
export default combineReducers<IApplicationState>({
  weather: weatherReducer,
})
