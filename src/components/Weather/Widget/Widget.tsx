import React from 'react'

import Typography from '@components/Typography'

import WeatherIcon from '../Icon'
import WeatherTempControlledBackground from '../TempControlledBackground'
import { IWeatherProps } from '../type'
import WeatherWidgetReadings from './Readings'
import { Root } from './styled'

interface IWeatherWidgetProps {
  weatherData: IWeatherProps
}

const WeatherWidget: React.FC<IWeatherWidgetProps> = ({ weatherData }) => {
  const { main, weather, wind, name } = weatherData
  if (weather.length === 0) {
    return <div>Weather not found</div>
  }

  const { icon, description } = weather[0]
  const { temp, humidity } = main

  return (
    <Root>
      <WeatherTempControlledBackground temp={temp}>
        <Typography variant="h3" as="div" uppercase>
          {name}
        </Typography>
        <WeatherIcon icon={icon} description={description} size={14} />
        <WeatherWidgetReadings temp={temp} humidity={humidity} speed={wind.speed} />
      </WeatherTempControlledBackground>
    </Root>
  )
}

export type { IWeatherWidgetProps }
export default WeatherWidget
