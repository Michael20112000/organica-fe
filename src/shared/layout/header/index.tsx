'use client'

import { useMobileMenu } from './use-mobile-menu'
import { Logo } from './logo'
import { Burger } from './burger'
import { MobileMenu } from './mobile-menu'
import { styles } from './styles'

export const Header = () => {
  const { showMobileMenu, toggleMobileMenu } = useMobileMenu()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Burger isActive={showMobileMenu} handlePress={toggleMobileMenu} />
        <MobileMenu
          showMobileMenu={showMobileMenu}
          closeMobileMenu={toggleMobileMenu}
        />
      </div>
    </header>
  )
}
