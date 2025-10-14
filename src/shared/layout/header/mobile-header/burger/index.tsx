import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { getStyles } from './styles'

interface IProps {
  isActive: boolean
  handlePress: () => void
}

export const Burger: FC<IProps> = ({ isActive, handlePress }) => {
  const t = useTranslations('common.ariaLabels.mobileMenu')
  const styles = getStyles(isActive)

  const ariaLabel = isActive ? t('close') : t('open')

  return (
    <button
      className={styles.burger}
      onClick={handlePress}
      aria-label={ariaLabel}
    >
      <div className={styles.cutletTop}></div>
      <div className={styles.cutletMiddle}></div>
      <div className={styles.cutletBottom}></div>
    </button>
  )
}
