import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import WeatherReadings, { IWeatherWidgetProps } from './Widget'

export default {
  title: 'Weather/Widget',
  component: WeatherReadings,
} as Meta

const Template: Story<IWeatherWidgetProps> = (args) => <WeatherReadings {...args} />

export const Widget = Template.bind({})
Widget.args = {
  weatherData: {
    coord: { lon: 120.9822, lat: 14.6042 },
    weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' }],
    base: 'stations',
    main: {
      temp: 28.14,
      feels_like: 32.48,
      temp_min: 27.78,
      temp_max: 28.89,
      pressure: 1009,
      humidity: 78,
    },
    visibility: 10000,
    wind: { speed: 2.06, deg: 0 },
    clouds: { all: 20 },
    dt: 1616166481,
    sys: { type: 1, id: 8160, country: 'PH', sunrise: 1616104867, sunset: 1616148403 },
    timezone: 28800,
    id: 1701668,
    name: 'Manila',
    cod: 200,
  },
}
