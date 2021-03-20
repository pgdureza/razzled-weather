import React from 'react'

import Loader from '@components/Loader'
import Typography from '@components/Typography'
import useWeatherData from '@hooks/useWeatherData'
import OverlayLayout from '@layout/overlay'

import WeatherList from './List'

type IWeatherProps = ReturnType<typeof useWeatherData>

const Weather: React.FC<IWeatherProps> = ({ data, error, isLoading }) => {
  if (error) {
    return (
      <OverlayLayout>
        <div>
          <Typography variant="h1" as="div">
            {error.message}
          </Typography>
        </div>
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

export { Weather }
export default WeatherContainer
