import { useState } from 'react'

import { IWeatherData } from '@store/weather'

const useActiveWeather = (weatherList: IWeatherData[]) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return {
    activeWeather: weatherList[activeIndex],
  }
}

export default useActiveWeather
