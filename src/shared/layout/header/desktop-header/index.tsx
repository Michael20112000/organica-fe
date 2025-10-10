import Link from 'next/link'
import { NavLink, Button } from '@/shared/components'
import { getNavigation } from '@/shared/hooks'
import { styles } from './styles'

export const DesktopHeader = async () => {
  const { linksArray } = getNavigation()

  return (
    <>
      <nav className={styles.nav}>
        {linksArray.map(link => (
          <NavLink key={link.href} {...link} />
        ))}
      </nav>
      <div className={styles.buttonsWrapper}>
        <Link href='?auth=logIn' className={styles.logInButton}>
          Log In
        </Link>
        <Button text='Sing Up' />
      </div>
    </>
  )
}
