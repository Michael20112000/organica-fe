import { NavLink } from '@/shared/components'
import { getNavigation } from '@/shared/hooks'
import { styles } from './styles'

export const DesktopHeader = async () => {
  const { linksArray } = await getNavigation()

  return (
    <nav className={styles.nav}>
      {linksArray.map(link => (
        <NavLink key={link.href} {...link} />
      ))}
    </nav>
  )
}
