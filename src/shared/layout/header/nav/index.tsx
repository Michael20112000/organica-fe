import Link from 'next/link'
import { useNavigation } from '@/shared/hooks'
import { styles } from './styles'

export const Nav = () => {
  const { linksArray } = useNavigation()

  return (
    <nav className={styles.nav}>
      {linksArray.map(link => (
        <Link key={link.href} href={link.href}>
          {link.title}
        </Link>
      ))}
    </nav>
  )
}
