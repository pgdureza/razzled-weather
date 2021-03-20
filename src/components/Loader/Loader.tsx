import React from 'react'

import Typography from '@components/Typography'
import loadingImage from '@lib/images/loading.svg'

import { Image, TextWrapper } from './styled'

const Loader: React.FC = () => {
  return (
    <div>
      <Image key="loader" src={loadingImage} />
      <TextWrapper>
        <Typography variant="h2">LOADING...</Typography>
      </TextWrapper>
    </div>
  )
}

export default Loader
