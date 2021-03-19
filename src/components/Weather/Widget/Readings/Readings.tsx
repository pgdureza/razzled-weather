import React from 'react'

import Typography from '@components/Typography'
import HumidityIcon from '@lib/icons/humidity.svg'
import WindIcon from '@lib/icons/wind.svg'

import { Img, Root, Section, SectionWrapper } from './styled'

interface IWeatherWidgetReadingsProps {
  temp: number
  humidity: number
  speed: number
}

const WeatherWidgetReadings: React.FC<IWeatherWidgetReadingsProps> = ({
  temp,
  humidity,
  speed,
}) => {
  return (
    <Root>
      <div>
        <Typography variant="h1" as="h2">{`${temp}°`}</Typography>
      </div>
      <SectionWrapper>
        <div>
          <Section>
            <Img src={HumidityIcon} alt="humidty" />
            <Typography variant="caption" as="div">{`${humidity}%`}</Typography>
          </Section>
          <Section>
            <Img src={WindIcon} alt="wind" />
            <Typography variant="caption" as="div">{`${speed}km/h`}</Typography>
          </Section>
        </div>
      </SectionWrapper>
    </Root>
  )
}

export type { IWeatherWidgetReadingsProps }
export default WeatherWidgetReadings
