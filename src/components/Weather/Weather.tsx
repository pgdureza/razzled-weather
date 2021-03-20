import React from 'react'

import FadeInContainer from '@components/FadeInContainer'
import Loader from '@components/Loader'
import { H1 } from '@components/Typography/Typography.stories'
import useActiveWeather from '@hooks/useActiveWeather'
import useWeatherData from '@hooks/useWeatherData'
import OverlayLayout from '@layout/overlay'

import WeatherVideoBackground from './VideoBackground'
import WeatherWidget from './Widget'

interface IWeatherProps
  extends ReturnType<typeof useWeatherData>,
    ReturnType<typeof useActiveWeather> {}

const Weather: React.FC<IWeatherProps> = ({ data, error, isLoading }) => {
  if (isLoading || data.length === 0) {
    return <Loader />
  }

  if (error) {
    return (
      <OverlayLayout>
        <H1>There was an error loading weather data. Please try a different city.</H1>
      </OverlayLayout>
    )
  }

  return (
    <>
      {data.map((weatherData) => (
        <FadeInContainer key={weatherData.id} visible={Boolean(weatherData)}>
          <>
            <WeatherVideoBackground icon={weatherData?.weather[0].icon} />
            <OverlayLayout>
              <WeatherWidget weatherData={weatherData} />
            </OverlayLayout>
          </>
        </FadeInContainer>
      ))}
    </>
  )
}

const WeatherContainer = () => {
  const weatherData = useWeatherData()
  const activeWeather = useActiveWeather(weatherData.data)
  return <Weather {...weatherData} {...activeWeather} />
}
export default WeatherContainer
