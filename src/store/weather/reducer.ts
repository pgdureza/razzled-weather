import {
  fetchWeatherError,
  fetchWeatherSuccess,
  FetchWeatherTypes,
  IWeatherState,
} from '@store/weather'
import { Reducer } from 'redux'

const initialState: IWeatherState = {
  isFetching: false,
  weatherData: [],
  error: null,
}

const reducer: Reducer<IWeatherState> = (state = initialState, action) => {
  switch (action.type) {
    case FetchWeatherTypes.FETCH_BY_CITY_NAMES:
    case FetchWeatherTypes.FETCH_BY_COORDS: {
      return {
        ...state,
        isFetching: true,
      }
    }

    case FetchWeatherTypes.FETCH_SUCCESS: {
      const { payload } = action as ReturnType<typeof fetchWeatherSuccess>
      return {
        ...state,
        isFetching: false,
        weatherData: payload,
      }
    }

    case FetchWeatherTypes.FETCH_ERROR: {
      const { payload } = action as ReturnType<typeof fetchWeatherError>
      return {
        ...state,
        isFetching: false,
        error: payload,
      }
    }

    default:
      return state
  }
}

export { reducer as weatherReducer }
