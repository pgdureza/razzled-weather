import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import Typography, { ITypographyProps } from './Typography'

export default {
  title: 'Basic/Typography',
  component: Typography,
} as Meta

const Template: Story<ITypographyProps> = (args) => <Typography {...args} />

const children = 'Bacon ipsum dolor amet meatloaf flank strip steak frankfurter porchetta.'

export const H1 = Template.bind({})
H1.args = {
  variant: 'h1',
  as: 'h1',
  children,
}

export const H2 = Template.bind({})
H2.args = {
  variant: 'h2',
  as: 'h2',
  children,
}

export const Body = Template.bind({})
Body.args = {
  variant: 'body',
  as: 'span',
  children,
}

export const Caption = Template.bind({})
Caption.args = {
  variant: 'caption',
  as: 'div',
  children,
}
