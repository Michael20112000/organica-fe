import { Logo } from './logo'
import { MobileNavigation } from './mobile-navigation'
import { MobileMenu } from './mobile-menu'
import { styles } from './styles'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <MobileNavigation drawerContent={<MobileMenu />} />
      </div>
    </header>
  )
}
