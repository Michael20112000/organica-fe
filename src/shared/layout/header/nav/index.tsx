import Link from 'next/link'
import { styles } from './styles'

export const Nav = () => {
  const linksObj = {
    home: {
      title: 'home',
      href: '/',
    },
    aboutUs: {
      title: 'aboutUs',
      href: '/about-us',
    },
    advantages: {
      title: 'advantages',
      href: '/advantages',
    },
    contacts: {
      title: 'contacts',
      href: '/contacts',
    },
  }

  const linksArray = Object.values(linksObj)

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
