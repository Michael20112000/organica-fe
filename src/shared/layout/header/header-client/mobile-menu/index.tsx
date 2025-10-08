import type { FC } from 'react'
import { getStyles } from './styles'

interface IProps {
  showMobileMenu: boolean
}

export const MobileMenu: FC<IProps> = ({ showMobileMenu }) => {
  const styles = getStyles(showMobileMenu)

  return <div className={styles.mobileMenu}>MobileMenu</div>
}
