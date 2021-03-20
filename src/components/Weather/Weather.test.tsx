import React from 'react'

import { render, screen } from '@testing-library/react'
import { config } from 'react-transition-group'

import { Weather } from './Weather'

import '@testing-library/jest-dom'

config.disabled = true

const mockData = [
  {
    coord: { lon: 121.0664, lat: 14.5737 },
    weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n' }],
    base: 'stations',
    main: {
      temp: 29.06,
      feels_like: 31.43,
      temp_min: 27.78,
      temp_max: 30,
      pressure: 1006,
      humidity: 70,
    },
    visibility: 10000,
    wind: { speed: 4.12, deg: 50 },
    clouds: { all: 40 },
    dt: 1616238525,
    sys: { type: 1, id: 8160, country: 'PH', sunrise: 1616191203, sunset: 1616234789 },
    timezone: 28800,
    id: 1694579,
    name: 'Pasig',
    cod: 200,
  },
  {
    coord: { lon: -156.5003, lat: 20.7503 },
    weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
    base: 'stations',
    main: {
      temp: 19.92,
      feels_like: 20.3,
      temp_min: 17.78,
      temp_max: 22,
      pressure: 1021,
      humidity: 83,
    },
    visibility: 10000,
    wind: { speed: 2.82, deg: 34, gust: 2.91 },
    clouds: { all: 1 },
    dt: 1616238504,
    sys: { type: 1, id: 7879, country: 'US', sunrise: 1616257776, sunset: 1616301419 },
    timezone: -36000,
    id: 5855797,
    name: 'Hawaii',
    cod: 200,
  },
]

const defaultProps = {
  isLoading: false,
  data: [],
  error: null,
}

describe('Weather', () => {
  describe('when loading', () => {
    it('shows loading screen', () => {
      render(<Weather {...defaultProps} />)
      expect(screen.queryByText('LOADING...')).toBeInTheDocument()
    })
  })

  describe('when has errors', () => {
    it('shows error message', () => {
      render(<Weather {...defaultProps} error={new Error('Has errors')} />)
      expect(screen.queryByText('Has errors')).toBeInTheDocument()
    })
  })

  describe('when has data', () => {
    beforeEach(() => {
      render(<Weather {...defaultProps} data={mockData} />)
    })
    it('shows a list of available weather data', () => {
      expect(screen.getByTestId('weather-list')).toBeInTheDocument()
    })

    it('only shows data for cities one at a time', () => {
      expect(screen.queryByText('Pasig')).toBeInTheDocument()
      expect(screen.queryByText('Hawaii')).not.toBeInTheDocument()
    })

    it('shows active city temperature, humidity and wind speeds', () => {
      expect(screen.queryByText('29.06°')).toBeInTheDocument()
      expect(screen.queryByText('70%')).toBeInTheDocument()
      expect(screen.queryByText('4.12km/h')).toBeInTheDocument()
    })
  })
})
