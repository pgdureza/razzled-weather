import styled from '@emotion/styled'

interface IRootProps {
  bgcolor: string
}

const Root = styled.div<IRootProps>`
  padding: 3.5rem 1.75rem;
  color: #fff;
  ${({ bgcolor }) => `
    background-color: rgba(${bgcolor}, 0.9);
  `}
`

export { Root }
