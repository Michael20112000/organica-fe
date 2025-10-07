import type { FC } from 'react'
import { Link } from '@/i18n/navigation'

import { useNavigation } from '@/shared/hooks'
import { getStyles } from './styles'

interface IProps {
  showMobileMenu: boolean
  closeMobileMenu: () => void
}

export const MobileMenu: FC<IProps> = ({ showMobileMenu, closeMobileMenu }) => {
  const { linksArray } = useNavigation()

  const styles = getStyles(showMobileMenu)

  return (
    <div className={styles.mobileMenu}>
      <nav className={styles.nav}>
        {linksArray.map(link => (
          <Link key={link.href} href={link.href}>
            {link.title}
          </Link>
        ))}
      </nav>
      <div className={styles.mobileMenuFooter}>
        <div>Socials</div>
        <div>Phones</div>
      </div>
    </div>
  )
}
