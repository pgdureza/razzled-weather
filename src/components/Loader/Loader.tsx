import React from 'react'

import Typography from '@components/Typography'
import loadingImage from '@lib/images/loading.svg'
import { Transition } from 'react-transition-group'

import { Image, TextWrapper } from './styled'

const defaultStyle = {
  transition: 'opacity 500ms',
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

interface ILoaderProps {
  isLoading: boolean
}

const Loader: React.FC<ILoaderProps> = ({ isLoading }) => {
  return (
    <Transition in={isLoading} timeout={500} unmountOnExit>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <Image key="loader" src={loadingImage} />
          <TextWrapper>
            <Typography variant="h2">LOADING...</Typography>
          </TextWrapper>
        </div>
      )}
    </Transition>
  )
}

export default Loader
