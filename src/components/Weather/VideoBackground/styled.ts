import { keyframes } from '@emotion/css'
import styled from '@emotion/styled'
import fadeIn from 'react-animations/lib/fade-in'

const Root = styled.video`
  min-height: 100vh;
  width: 100vw;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  animation: 2s ${keyframes`${fadeIn}`};
`

export { Root }
