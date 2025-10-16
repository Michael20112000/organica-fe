import { useTranslations } from 'next-intl'
import {
  fragrantCoffeeImg,
  cupOfCoffeeFromCoffeeBeansImg,
} from '@/shared/assets'
import { Hero, Info } from '@/shared/section'

export default function Home() {
  const tHome = useTranslations('homePage')
  const tCommon = useTranslations('common')

  return (
    <>
      <Hero
        bgImage={fragrantCoffeeImg}
        bgAlt={tHome('hero.bgAlt')}
        overtitle={tHome('hero.overtitle')}
        title={tHome('hero.title')}
        textKey='homePage.hero.text'
        buttonText={tCommon('buttonText.0')}
      />
      <Info
        titleKey='homePage.aboutCoffee.title'
        paragraphsKeys={['homePage.aboutCoffee.paragraphs.0']}
        buttonText={tCommon('buttonText.1')}
        image={cupOfCoffeeFromCoffeeBeansImg}
        imageAlt={tHome('aboutCoffee.imageAlt')}
      />
    </>
  )
}
