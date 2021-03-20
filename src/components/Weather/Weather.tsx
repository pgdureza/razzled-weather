import React from 'react'

import Loader from '@components/Loader'
import { H1 } from '@components/Typography/Typography.stories'
import useWeatherData from '@hooks/useWeatherData'
import OverlayLayout from '@layout/overlay'

import WeatherList from './List'

type IWeatherProps = ReturnType<typeof useWeatherData>

const Weather: React.FC<IWeatherProps> = ({ data, error, isLoading }) => {
  if (error) {
    return (
      <OverlayLayout>
        <H1>Could not load all cities. Please try a different cities. </H1>
      </OverlayLayout>
    )
  }

  if (isLoading || data.length === 0) {
    return <Loader />
  }

  return <WeatherList list={data} />
}

const WeatherContainer = () => {
  const weatherData = useWeatherData()
  return <Weather {...weatherData} />
}
export default WeatherContainer
