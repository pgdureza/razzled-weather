import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import WeatherVideoBackground, { IWeatherVideoBackgroundProps } from './VideoBackground'

export default {
  title: 'Basic/VideoBackground',
  component: WeatherVideoBackground,
} as Meta

const Template: Story<IWeatherVideoBackgroundProps> = (args) => <WeatherVideoBackground {...args} />

export const ClearSky = Template.bind({})
ClearSky.args = {
  icon: '01d',
}

export const FewClouds = Template.bind({})
FewClouds.args = {
  icon: '02d',
}

export const ScatteredClouds = Template.bind({})
ScatteredClouds.args = {
  icon: '03d',
}

export const BrokenClouds = Template.bind({})
BrokenClouds.args = {
  icon: '04d',
}

export const ShowerRain = Template.bind({})
ShowerRain.args = {
  icon: '09d',
}

export const Rain = Template.bind({})
Rain.args = {
  icon: '10d',
}

export const Thunderstorm = Template.bind({})
Thunderstorm.args = {
  icon: '11d',
}

export const Snow = Template.bind({})
Snow.args = {
  icon: '13d',
}

export const Mist = Template.bind({})
Mist.args = {
  icon: '50d',
}
