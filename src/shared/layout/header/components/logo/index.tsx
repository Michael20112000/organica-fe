import Link from 'next/link'
import { styles } from './styles'

export const Logo = () => {
  return (
    <Link href='/' className={styles.logo}>
      Bean Scene
    </Link>
  )
}
