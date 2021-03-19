import React from 'react'

import { Root } from './styled'

interface IWeatherTempControlledBackgroundProps {
  temp: number
}

const WeatherTempControlledBackground: React.FC<IWeatherTempControlledBackgroundProps> = ({
  temp,
  children,
}) => {
  const value = temp * 6.375

  const red = Math.min(255, parseInt(String(value)))
  const blue = parseInt(String(255 - value))
  const green = red / 2

  const bgColor = `${red}, ${green}, ${blue}`

  return <Root bgcolor={bgColor}>{children}</Root>
}

export type { IWeatherTempControlledBackgroundProps }
export default WeatherTempControlledBackground
