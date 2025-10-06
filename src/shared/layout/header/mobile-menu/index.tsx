import type { FC } from 'react'
import { getStyles } from './styles'

interface IProps {
  showMobileMenu: boolean
  closeMobileMenu: () => void
}

export const MobileMenu: FC<IProps> = ({ showMobileMenu, closeMobileMenu }) => {
  const styles = getStyles(showMobileMenu)

  return <div className={styles.mobileMenu}>MobileMenu</div>
}
