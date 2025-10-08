'use client'

import type { FC, ReactNode } from 'react'
import { useMobileMenu } from './use-mobile-menu'
import { Burger, MobileMenu } from './components'
import { styles } from './styles'

interface IProps {
  logo: ReactNode
  nav: ReactNode
}

export const Header: FC<IProps> = ({ logo, nav }) => {
  const { showMobileMenu, toggleMobileMenu } = useMobileMenu()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {logo}
        <Burger isActive={showMobileMenu} handlePress={toggleMobileMenu} />
        <MobileMenu showMobileMenu={showMobileMenu} nav={nav} />
      </div>
    </header>
  )
}
