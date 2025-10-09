import type { FC, ComponentProps } from 'react'
import { getStyles } from './styles'

interface IProps extends ComponentProps<'button'> {
  text: string
}

export const Button: FC<IProps> = ({ text, className, ...props }) => {
  const styles = getStyles(className)

  return (
    <button className={styles.button} {...props}>
      {text}
    </button>
  )
}
