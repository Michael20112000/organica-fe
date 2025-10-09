import type { FC } from 'react'
import { getStyles } from './styles'

interface IProps {
  isActive: boolean
  handlePress: () => void
}

export const Burger: FC<IProps> = ({ isActive, handlePress }) => {
  const styles = getStyles(isActive)

  return (
    <button className={styles.burger} onClick={handlePress}>
      <div className={styles.cutletTop}></div>
      <div className={styles.cutletMiddle}></div>
      <div className={styles.cutletBottom}></div>
    </button>
  )
}
