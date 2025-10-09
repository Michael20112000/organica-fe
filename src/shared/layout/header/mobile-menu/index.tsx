import Link from 'next/link'
import { useNavigation } from '@/shared/hooks'
import { styles } from './styles'

export const MobileMenu = () => {
  const { linksArray } = useNavigation()

  return (
    <div className={styles.mobileMenu}>
      <nav className={styles.nav}>
        {linksArray.map(link => (
          <Link key={link.href} href={link.href}>
            {link.title}
          </Link>
        ))}
      </nav>
      <div>Message from server</div>
    </div>
  )
}
