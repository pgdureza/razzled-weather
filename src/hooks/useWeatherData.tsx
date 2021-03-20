import { useEffect } from 'react'

import { IApplicationState } from '@store'
import {
  fetchWeatherByCityNames,
  fetchWeatherByCoords,
  fetchWeatherError,
  selectIsFetching,
  selectWeatherData,
  selectWeatherError,
} from '@store/weather'
import queryString from 'query-string'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'

const useWeatherData = () => {
  const { search } = useLocation()

  const dispatch = useDispatch()
  const { isLoading = false, data = [], error } = useSelector((state: IApplicationState) => ({
    isLoading: selectIsFetching(state),
    data: selectWeatherData(state),
    error: selectWeatherError(state),
  }))

  const { city } = queryString.parse(search, { arrayFormat: 'comma' })

  useEffect(() => {
    if (!city) {
      navigator.geolocation.getCurrentPosition(
        (currentPosition) => {
          const { latitude: lat, longitude: lon } = currentPosition.coords
          dispatch(fetchWeatherByCoords({ lat, lon }))
        },
        () => {
          dispatch(fetchWeatherError(new Error('Please enable geolocation on your browser.')))
        },
      )
    } else {
      const q = typeof city === 'string' ? [city] : city
      dispatch(fetchWeatherByCityNames(q))
    }
  }, [])

  return {
    data,
    isLoading,
    error,
  }
}

export default useWeatherData
