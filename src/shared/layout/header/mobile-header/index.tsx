'use client'

import type { ReactNode, FC } from 'react'
import { useDrawer } from '../use-drawer'
import { Burger } from './burger'
import { getStyles } from './styles'

interface IProps {
  drawerContent: ReactNode
}

export const MobileHeader: FC<IProps> = ({ drawerContent }) => {
  const { showDrawer, toggleDrawer } = useDrawer()
  const styles = getStyles(showDrawer)

  return (
    <>
      <Burger isActive={showDrawer} handlePress={toggleDrawer} />
      <div className={styles.drawer}>{drawerContent}</div>
    </>
  )
}
