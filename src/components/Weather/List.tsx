import React, { useEffect, useState } from 'react'

import FadeInContainer from '@components/UI/FadeInContainer'
import WeatherVideoBackground from '@components/Weather/VideoBackground'
import WeatherWidget from '@components/Weather/Widget'
import OverlayLayout from '@layout/overlay'
import { IWeatherData } from '@store/weather'

interface IWeatherListProps {
  list: IWeatherData[]
}

const DURATION_PER_WEATHER_DATE = 5000

const WeatherList: React.FC<IWeatherListProps> = ({ list }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    if (list.length > 1) {
      const timer = setInterval(() => {
        setActiveIndex((activeIndex) => {
          if (activeIndex + 1 < list.length) {
            return activeIndex + 1
          }
          return 0
        })
      }, DURATION_PER_WEATHER_DATE)
      return () => {
        clearInterval(timer)
      }
    }
  }, [])

  return (
    <div data-testid="weather-list">
      {list.map((weatherData, index) => (
        <FadeInContainer key={weatherData.name} visible={index === activeIndex}>
          <WeatherVideoBackground icon={weatherData?.weather[0].icon} />
          {index === activeIndex && (
            <OverlayLayout>
              <WeatherWidget weatherData={weatherData} />
            </OverlayLayout>
          )}
        </FadeInContainer>
      ))}
    </div>
  )
}

export default WeatherList
