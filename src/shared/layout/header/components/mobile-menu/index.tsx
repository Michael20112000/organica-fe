import type { FC, ReactNode } from 'react'
import { getStyles } from './styles'

interface IProps {
  showMobileMenu: boolean
  nav: ReactNode
}

export const MobileMenu: FC<IProps> = ({ showMobileMenu, nav }) => {
  const styles = getStyles(showMobileMenu)

  return <div className={styles.mobileMenu}>{nav}</div>
}
