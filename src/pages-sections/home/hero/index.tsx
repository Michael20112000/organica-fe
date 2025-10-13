import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { RichText, Button } from '@/shared/components'
import { coffeeBg } from './images'
import { styles } from './styles'

export const Hero = () => {
  const t = useTranslations('homePage.hero')

  return (
    <section className={styles.section}>
      <Image
        className={styles.bgImage}
        src={coffeeBg}
        alt='Hero background'
        fill
      />
      <div className={styles.eclipse} />
      <div className={styles.content}>
        <p className={styles.overtitle}>{t('overtitle')}</p>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.text}>
          <RichText translationKey='homePage.hero.text' />
        </p>
        <Button className={styles.button} text='Order Now' />
      </div>
    </section>
  )
}
