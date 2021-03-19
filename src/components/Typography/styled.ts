/* eslint-disable indent */
import styled from '@emotion/styled'

type Variant = 'h1' | 'h2' | 'h3' | 'body' | 'caption'

interface IRootProps {
  variant: Variant
  capitalize?: boolean
  uppercase?: boolean
}

const Root = styled.span<IRootProps>`
  ${({ capitalize }) =>
    capitalize &&
    `
    text-transform: capitalize;
  `};
  ${({ uppercase }) =>
    uppercase &&
    `
    text-transform: uppercase;
  `};
  ${({ variant }) =>
    variant === 'h1'
      ? `
        font-family: 'league-gothic-condensed', sans-serif;
        font-weight: 300;
        font-size: 5.25rem;
        line-height: 5.5rem;
        letter-spacing: 3.5px; `
      : variant === 'h2'
      ? `
        font-family: 'league-gothic', sans-serif;
        font-weight: 400;
        font-size: 4.125rem;
        line-height: 5rem;
        letter-spacing: 2px;`
      : variant === 'h3'
      ? `
        font-family: 'league-gothic', sans-serif;
        font-weight: 400;
        font-size: 1.75rem;
        line-height: 1.75rem;
        letter-spacing: 10px;`
      : variant === 'body'
      ? `
        font-family: 'league-gothic', sans-serif;
        font-weight: 400;
        font-size: 2.25rem;
        line-height: 2.75rem;
        letter-spacing: 3px;`
      : variant === 'caption' &&
        `
        font-family: 'league-gothic', sans-serif;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.5rem;
        letter-spacing: 0.75px;
      `}
`

export type { IRootProps, Variant }
export { Root }
