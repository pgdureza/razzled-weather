import { keyframes } from '@emotion/css'
import styled from '@emotion/styled'
import fadeIn from 'react-animations/lib/fade-in'

const MainLayout = styled.div`
  min-height: 100vh;
  background-color: #fefefe;
  overflow: hidden;
  animation: 1s ${keyframes`${fadeIn}`};
`

export default MainLayout
