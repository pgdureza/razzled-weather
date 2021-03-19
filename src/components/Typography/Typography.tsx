import React from 'react'

import { IRootProps, Root } from './styled'

interface ITypographyProps extends IRootProps, React.HTMLAttributes<HTMLSpanElement> {
  as?: JSX.IntrinsicElements | React.ComponentType | string
}

const Typography: React.FC<ITypographyProps> = ({
  variant = 'body',
  as = 'span',
  children,
  ...otherProps
}) => (
  <Root variant={variant} as={as as React.ComponentType} {...otherProps}>
    {children}
  </Root>
)

export type { ITypographyProps }
export default Typography
