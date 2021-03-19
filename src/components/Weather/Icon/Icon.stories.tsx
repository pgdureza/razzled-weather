import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import WeatherIcon, { IWeatherIconProps } from './Icon'

const options = [
  '01n',
  '02n',
  '03n',
  '04n',
  '09n',
  '10n',
  '11n',
  '13n',
  '50n',
  '01n',
  '02n',
  '03n',
  '04n',
  '09n',
  '10n',
  '11n',
  '13n',
  '50n',
]

export default {
  title: 'Weather/Icon',
  component: WeatherIcon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options,
      },
    },
  },
} as Meta

const Template: Story<IWeatherIconProps> = (args) => (
  <div style={{ background: 'orange', display: 'inline-block' }}>
    <WeatherIcon {...args} />
  </div>
)

export const Icon01d = Template.bind({})
Icon01d.args = {
  icon: '01d',
  description: 'example',
  size: 5,
}

export const Icon02d = Template.bind({})
Icon02d.args = {
  icon: '02d',
  description: 'example',
  size: 5,
}

export const Icon03d = Template.bind({})
Icon03d.args = {
  icon: '03d',
  description: 'example',
  size: 5,
}

export const Icon04d = Template.bind({})
Icon04d.args = {
  icon: '04d',
  description: 'example',
  size: 5,
}

export const Icon09d = Template.bind({})
Icon09d.args = {
  icon: '09d',
  description: 'example',
  size: 5,
}

export const Icon11d = Template.bind({})
Icon11d.args = {
  icon: '11d',
  description: 'example',
  size: 5,
}

export const Icon13d = Template.bind({})
Icon13d.args = {
  icon: '13d',
  description: 'example',
  size: 5,
}

export const Icon50d = Template.bind({})
Icon50d.args = {
  icon: '50d',
  description: 'example',
  size: 5,
}

export const Icon01n = Template.bind({})
Icon01n.args = {
  icon: '01n',
  description: 'example',
  size: 5,
}

export const Icon02n = Template.bind({})
Icon02n.args = {
  icon: '02n',
  description: 'example',
  size: 5,
}

export const Icon03n = Template.bind({})
Icon03n.args = {
  icon: '03n',
  description: 'example',
  size: 5,
}

export const Icon04n = Template.bind({})
Icon04n.args = {
  icon: '04n',
  description: 'example',
  size: 5,
}

export const Icon09n = Template.bind({})
Icon09n.args = {
  icon: '09n',
  description: 'example',
  size: 5,
}

export const Icon11n = Template.bind({})
Icon11n.args = {
  icon: '11n',
  description: 'example',
  size: 5,
}

export const Icon13n = Template.bind({})
Icon13n.args = {
  icon: '13n',
  description: 'example',
  size: 5,
}

export const Icon50n = Template.bind({})
Icon50n.args = {
  icon: '50n',
  description: 'example',
  size: 5,
}
