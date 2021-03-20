import { selectIsFetching, selectWeatherData, selectWeatherError } from '../selectors'
import { IWeatherState } from '../types'

describe('selectIsFetching', () => {
  it('returns true when currently fetching weather data', () => {
    expect(selectIsFetching.resultFunc({ isFetching: true } as IWeatherState)).toBe(true)
  })
  it('returns false when not fetching weather data', () => {
    expect(selectIsFetching.resultFunc({ isFetching: false } as IWeatherState)).toBe(false)
  })
})

describe('selectWeatherData', () => {
  it('returns current weatherData', () => {
    const weatherData = {}
    expect(selectWeatherData.resultFunc({ weatherData } as IWeatherState)).toBe(weatherData)
  })
  it('returns undefined when no weatherData is in the store', () => {
    expect(selectWeatherData.resultFunc({} as IWeatherState)).toBe(undefined)
  })
})

describe('selectWeatherError', () => {
  it('returns the error stored', () => {
    const error = new Error('test')
    expect(selectWeatherError.resultFunc({ error } as IWeatherState)).toBe(error)
  })
  it('returns undefined by default', () => {
    expect(selectWeatherError.resultFunc({} as IWeatherState)).toBe(undefined)
  })
})
