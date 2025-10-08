import { Logo } from './logo'
import { HeaderClient } from './header-client'
import { styles } from './styles'

export const Header = () => {
  console.log('[Header]', typeof window === 'undefined' ? 'Server' : 'Client')

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <HeaderClient />
      </div>
    </header>
  )
}
