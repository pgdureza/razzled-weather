import styled from '@emotion/styled'

const Image = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
`

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`

export { Image, TextWrapper }
