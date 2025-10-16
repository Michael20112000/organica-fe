import type { FC } from 'react'
import Image, { type StaticImageData } from 'next/image'

import { RichText, Button } from '@/shared/components'
import { styles } from './styles'

interface IHeroProps {
  bgImage: StaticImageData
  bgAlt: string
  overtitle: string
  title: string
  textKey: string
  buttonText: string
}

export const Hero: FC<IHeroProps> = props => {
  return (
    <section className={styles.section}>
      <Image
        className={styles.bgImage}
        src={props.bgImage}
        alt={props.bgAlt}
        fill
      />
      <div className={styles.eclipse} />
      <div className={styles.content}>
        <p className={styles.overtitle}>{props.overtitle}</p>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.text}>
          <RichText tKey={props.textKey} />
        </p>
        <Button className={styles.button} text={props.buttonText} />
      </div>
    </section>
  )
}
