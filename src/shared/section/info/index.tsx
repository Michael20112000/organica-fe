import type { FC } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { RichText, Button } from '@/shared/components'
import { styles } from './styles'

interface IInfoProps {
  titleKey: string
  paragraphsKeys: string[]
  buttonText: string
  image: StaticImageData
  imageAlt: string
}

export const Info: FC<IInfoProps> = ({
  titleKey,
  paragraphsKeys,
  buttonText,
  image,
  imageAlt,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            <RichText tKey={titleKey} />
          </h2>
          <div className={styles.allParagraphsWrapper}>
            {paragraphsKeys.map(key => (
              <p key={key}>
                <RichText tKey={key} />
              </p>
            ))}
          </div>
          <Button text={buttonText} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src={image} alt={imageAlt} fill />
        </div>
      </div>
    </section>
  )
}
