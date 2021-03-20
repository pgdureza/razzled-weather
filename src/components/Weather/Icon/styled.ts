import styled from '@emotion/styled'

interface IRootProps {
  size?: number
}

const Root = styled.img<IRootProps>`
  padding: 1rem;
  ${({ size = 6.25 }) => `
    height: ${size}rem;
    width: ${size}rem;
  `}
`

export type { IRootProps }
export { Root }
