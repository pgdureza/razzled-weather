import React from 'react'

import { IRootProps, Root } from './styled'

interface IWeatherIconProps extends IRootProps {
  icon: string
  description: string
}

const WeatherIcon: React.FC<IWeatherIconProps> = ({ size, icon, description }) => (
  <Root size={size} src={require(`./icons/${icon}.svg`)} alt={description} />
)

export type { IWeatherIconProps }
export default WeatherIcon
