import { Logo } from './logo'
import { ClientWrapper } from './client-wrapper'
import { Nav } from './nav'
import { styles } from './styles'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <ClientWrapper nav={<Nav />} />
      </div>
    </header>
  )
}
