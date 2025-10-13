import { NavLink } from '@/shared/components'
import { getNavigation } from '@/shared/hooks'
import { styles } from './styles'

export const MobileMenu = async () => {
  const { linksArray } = await getNavigation()

  return (
    <div className={styles.mobileMenu}>
      <nav className={styles.nav}>
        {linksArray.map(link => (
          <NavLink key={link.href} {...link} />
        ))}
      </nav>
      <div>Message from server</div>
    </div>
  )
}
