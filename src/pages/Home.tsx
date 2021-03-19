import React, { useState } from 'react'

import Loader from '@components/Loader'
import { IWeatherProps } from '@components/Weather/type'
import WeatherVideoBackground from '@components/Weather/VideoBackground'
import WeatherWidget from '@components/Weather/Widget'
import MainLayout from '@layout/main'
import OverlayLayout from '@layout/overlay'
import axios from 'axios'
import queryString from 'query-string'
import { useLocation } from 'react-router'

const appId = process.env.RAZZLE_RUNTIME_OPEN_WEATHER_KEY

const Home: React.FC = () => {
  const { search } = useLocation()

  const { city } = queryString.parse(search, { arrayFormat: 'comma' })
  const [data, setData] = useState<IWeatherProps | null>(null)
  const [loading, setLoading] = useState(true)

  React.useEffect(() => {
    const handleEffect = async () => {
      if (!city) {
        navigator.geolocation.getCurrentPosition(
          async (currentPosition) => {
            const { latitude, longitude } = currentPosition.coords
            const response = await axios.get(
              `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appId}&units=metric`,
            )
            setData(response.data)
            setLoading(false)
          },
          () => {
            alert('Please enable geolocation on your browser.')
            setLoading(false)
          },
        )
      } else {
        const q = typeof city === 'string' ? city : city.join(',')
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appId}&units=metric`,
        )
        setData(response.data)
        setLoading(false)
      }
    }
    handleEffect()
  }, [])

  return (
    <MainLayout>
      {data && (
        <>
          {}
          <WeatherVideoBackground icon={data.weather[0].icon} />
          <OverlayLayout>
            <WeatherWidget weatherData={data} />
          </OverlayLayout>
        </>
      )}
      <Loader isLoading={loading} />
    </MainLayout>
  )
}

export default Home
