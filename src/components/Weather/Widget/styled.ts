import { keyframes } from '@emotion/css'
import styled from '@emotion/styled'
import flipInY from 'react-animations/lib/flip-in-y'

const Root = styled.div`
  min-height: 20rem;
  max-width: 100%;
  width: 20rem;
  text-align: center;
  color: white;
  animation: 1200ms ${keyframes`${flipInY}`};
`

const IconSection = styled.div`
  display: flex;
`

export { Root, IconSection }
