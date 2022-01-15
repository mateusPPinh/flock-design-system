import { LinkComponent } from './styles'

import { LinkProps } from './types'

export const Link = ({ children, isActive, cursor }: LinkProps) => {
  return (
    <LinkComponent isActive={isActive} cursor={cursor}>
      {children}
    </LinkComponent>
  )
}