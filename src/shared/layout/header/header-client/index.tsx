'use client'

import { useMobileMenu } from '../use-mobile-menu'
import { Burger } from './burger'
import { MobileMenu } from './mobile-menu'

export const HeaderClient = () => {
  const { showMobileMenu, toggleMobileMenu } = useMobileMenu()

  return (
    <>
      <Burger isActive={showMobileMenu} handlePress={toggleMobileMenu} />
      <MobileMenu showMobileMenu={showMobileMenu} />
    </>
  )
}
