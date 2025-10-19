import type { FC } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { Button } from '@/shared/components'
import { styles } from './styles'

export interface ICard1Props {
  image: StaticImageData
  imageAlt: string
  title: string
  subtitle: string
  anotherText: string // TODO: fix
  buttonText: string
}

export const Card1: FC<ICard1Props> = props => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={props.image}
          alt={props.imageAlt}
          fill
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.subtitle}>{props.subtitle}</div>
        <div className={styles.anotherText}>{props.anotherText}</div>
        <Button text={props.buttonText} className={styles.button} />
      </div>
    </div>
  )
}
