import React from 'react'

import { Transition } from 'react-transition-group'

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

interface IFadeInContainer {
  visible: boolean
}

const FadeInContainer: React.FC<IFadeInContainer> = ({ visible, children }) => {
  return (
    <Transition in={visible} timeout={1000}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

export default FadeInContainer
