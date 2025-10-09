'use client'

import type { ReactNode, FC } from 'react'
import { useMobileMenu } from '../use-mobile-menu'
import { Burger } from './burger'
import { MobileMenu } from './mobile-menu'

interface IProps {
  nav: ReactNode
}

export const ClientWrapper: FC<IProps> = ({ nav }) => {
  const { showMobileMenu, toggleMobileMenu } = useMobileMenu()

  return (
    <>
      <Burger isActive={showMobileMenu} handlePress={toggleMobileMenu} />
      <MobileMenu showMobileMenu={showMobileMenu} nav={nav} />
    </>
  )
}
