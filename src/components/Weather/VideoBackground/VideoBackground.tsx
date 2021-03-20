import React, { useState } from 'react'

import FadeInContainer from '@components/UI/FadeInContainer'

import { Video } from './styled'

interface IWeatherVideoBackgroundProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: string
}

const VIDEO_MAP = {
  '01': 'https://cdn.flixel.com/flixel/zjqsoc6ecqhntpl5vacs.hd.mp4',
  '02': 'https://cdn.flixel.com/flixel/aorl3skmssy7udwopk22.hd.mp4',
  '03': 'https://cdn.flixel.com/flixel/e95h5cqyvhnrk4ytqt4q.hd.mp4',
  '04': 'https://cdn.flixel.com/flixel/9m11gd43m6qn3y93ntzp.hd.mp4',
  '09': 'https://cdn.flixel.com/flixel/f0w23bd0enxur5ff0bxz.hd.mp4',
  '10': 'https://cdn.flixel.com/flixel/f0w23bd0enxur5ff0bxz.hd.mp4',
  '11':
    'https://ak.picdn.net/shutterstock/videos/1054311788/preview/stock-footage-a-bolt-of-lightning-in-a-dark-cloud.mp4',
  '13': 'https://cdn.flixel.com/flixel/5363uhabodwwrzgnq6vx.hd.mp4',
  '50': 'https://cdn.flixel.com/flixel/vwqzlk4turo2449be9uf.hd.mp4',
}

const WeatherVideoBackground: React.FC<IWeatherVideoBackgroundProps> = ({ icon = '' }) => {
  const [isVideoReady, setIsVideoReady] = useState(false)
  const key = icon.slice(0, 2)
  const src = VIDEO_MAP[key]

  const handleLoad = () => {
    setIsVideoReady(true)
  }

  if (!src) {
    return null
  }

  return (
    <FadeInContainer visible={isVideoReady}>
      <Video autoPlay muted loop onLoadedData={handleLoad}>
        <source src={src} type={'video/mp4'} />
      </Video>
    </FadeInContainer>
  )
}

export type { IWeatherVideoBackgroundProps }
export default WeatherVideoBackground
