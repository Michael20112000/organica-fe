import { Logo } from './logo'
import { MobileHeader } from './mobile-header'
import { MobileMenu } from './mobile-menu'
import { DesktopHeader } from './desktop-header'
import { styles } from './styles'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <MobileHeader drawerContent={<MobileMenu />} />
        <DesktopHeader />
      </div>
    </header>
  )
}
