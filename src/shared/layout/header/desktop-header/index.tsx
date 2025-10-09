import Link from 'next/link'
import { Button } from '@/shared/components'
import { useNavigation } from '@/shared/hooks'
import { styles } from './styles'

export const DesktopHeader = () => {
  const { linksArray } = useNavigation()

  return (
    <>
      <nav className={styles.nav}>
        {linksArray.map(({ href, title }) => (
          <Link key={href} href={href}>
            {title}
          </Link>
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
