import Image from 'next/image'
import { coffee } from './images'
import { styles } from './styles'

export const Hero = () => {
  return (
    <section className={styles.section}>
      <Image src={coffee} alt='Hero background' fill objectFit='cover' />
    </section>
  )
}
