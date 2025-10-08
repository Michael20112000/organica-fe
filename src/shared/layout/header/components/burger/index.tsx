import type { FC } from 'react'
import { getStyles } from './styles'
import { cn } from '@/shared/lib'

interface IProps {
  isActive: boolean
  handlePress: () => void
}

export const Burger: FC<IProps> = ({ isActive, handlePress }) => {
  const styles = getStyles(isActive)

  return (
    <button className={styles.burger} onClick={handlePress}>
      <div className={cn(styles.cutlet, styles.cutletTop)}></div>
      <div className={cn(styles.cutlet, styles.cutletMiddle)}></div>
      <div className={cn(styles.cutlet, styles.cutletBottom)}></div>
    </button>
  )
}
