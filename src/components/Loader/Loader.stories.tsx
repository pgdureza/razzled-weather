import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import Loader from './Loader'

export default {
  title: 'Basic/Loader',
  component: Loader,
} as Meta

const Template: Story = (args) => <Loader {...args} />

export const Loading = Template.bind({})
