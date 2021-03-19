import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import WeatherTempControlledBackground, {
  IWeatherTempControlledBackgroundProps,
} from './TempControlledBackground'

export default {
  title: 'Weather/TempControlledBackground',
  component: WeatherTempControlledBackground,
} as Meta

const Template: Story<IWeatherTempControlledBackgroundProps> = (args) => (
  <WeatherTempControlledBackground {...args} />
)

export const TempControlledBackground = Template.bind({})
TempControlledBackground.args = {
  temp: 20,
  children: ' ',
}
