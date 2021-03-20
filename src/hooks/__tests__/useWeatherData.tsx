import React from 'react'

import useWeatherData from '@hooks/useWeatherData'
import reducer from '@store'
import { fetchWeatherByCityNames, fetchWeatherByCoords, IWeatherState } from '@store/weather'
import { act, renderHook } from '@testing-library/react-hooks'
import { createMemoryHistory, Location } from 'history'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createStore } from 'redux'

const mockStore = createStore(reducer, { weather: {} as IWeatherState })

jest.spyOn(mockStore, 'dispatch')

const memoryHistory = createMemoryHistory()
const createMockWrapper = (location?: Location): React.FC => ({ children }) => {
  const history = { ...memoryHistory, location: { ...memoryHistory.location, ...location } }

  return (
    <Provider store={mockStore}>
      <Router history={history}>{children}</Router>
    </Provider>
  )
}

describe('useWeatherData', () => {
  describe('test side effects', () => {
    afterEach(jest.clearAllMocks)
    describe('when search params has city names', () => {
      it('dispatches fetch for weather data using city names', () => {
        renderHook(() => useWeatherData(), {
          wrapper: createMockWrapper({ ...memoryHistory.location, search: '?city=manila,tokyo' }),
        })
        expect(mockStore.dispatch).toHaveBeenCalledWith(
          fetchWeatherByCityNames(['manila', 'tokyo']),
        )
      })
    })

    describe('when no city names in search params', () => {
      it('dispatches fetch for weather data using geolocation', () => {
        renderHook(() => useWeatherData(), {
          wrapper: createMockWrapper(),
        })
        expect(mockStore.dispatch).toHaveBeenCalledWith(fetchWeatherByCoords({ lat: 10, lon: 20 }))
      })
    })
  })
})
