import type { PropsWithChildren, FC } from 'react'
import { Title, RichText } from '@/shared/components'
import { styles } from './styles'

interface ISectionTemplate1Props extends PropsWithChildren {
  titleKey: string
  subtitleKey: string
}

export const SectionTemplate1: FC<ISectionTemplate1Props> = ({
  titleKey,
  subtitleKey,
  children,
}) => {
  return (
    <section className={styles.section}>
      <div className='app-container'>
        <Title tKey={titleKey} className='text-center' />
        <div className={styles.subtitle}>
          <RichText tKey={subtitleKey} />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  )
}
