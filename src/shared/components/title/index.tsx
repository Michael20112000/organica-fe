import type { ComponentProps, FC } from 'react'
import { RichText } from '@/shared/components'
import { getStyles } from './styles'

interface IProps extends ComponentProps<'h2'> {
  tKey: string
}

export const Title: FC<IProps> = ({ tKey, className, ...props }) => {
  const styles = getStyles(className)

  return (
    <h2 className={styles.title} {...props}>
      <RichText tKey={tKey} />
    </h2>
  )
}
