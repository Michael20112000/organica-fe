import { useTranslations } from 'next-intl'
import { fragrantCoffeeImg } from '@/shared/assets'
import { Hero } from '@/shared/section'

export default function Home() {
  const tHero = useTranslations('homePage.hero')
  const tCommon = useTranslations('common')

  return (
    <>
      <Hero
        bgImage={fragrantCoffeeImg}
        bgAlt={tHero('bgAlt')}
        overtitle={tHero('overtitle')}
        title={tHero('title')}
        textKey='homePage.hero.text'
        buttonText={tCommon('buttonText.0')}
      />
    </>
  )
}
