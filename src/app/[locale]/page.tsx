import { useTranslations } from 'next-intl'
import {
  fragrantCoffeeImg,
  cupOfCoffeeFromCoffeeBeansImg,
  cappuccinoImg,
  chaiLatteImg,
  macchiatoImg,
  espressoImg,
} from '@/shared/assets'
import { Hero, Info } from '@/shared/section'
import { SectionTemplate1 } from '@/shared/sections-templates'
import { Card1, type ICard1Props } from '@/shared/components'

export default function Home() {
  const tPage = useTranslations('homePage')
  const tCommon = useTranslations('common')

  const offers: ICard1Props[] = [
    {
      image: cappuccinoImg,
      imageAlt: tPage('offers.items.0.imageAlt'),
      title: tPage('offers.items.0.name'),
      subtitle: tPage('offers.items.0.ingredients'),
      anotherText: '$8.50',
      buttonText: tCommon('buttonText.1'),
    },
    {
      image: chaiLatteImg,
      imageAlt: tPage('offers.items.1.imageAlt'),
      title: tPage('offers.items.1.name'),
      subtitle: tPage('offers.items.1.ingredients'),
      anotherText: '$8.50',
      buttonText: tCommon('buttonText.1'),
    },
    {
      image: macchiatoImg,
      imageAlt: tPage('offers.items.2.imageAlt'),
      title: tPage('offers.items.2.name'),
      subtitle: tPage('offers.items.2.ingredients'),
      anotherText: '$8.50',
      buttonText: tCommon('buttonText.1'),
    },
    {
      image: espressoImg,
      imageAlt: tPage('offers.items.3.imageAlt'),
      title: tPage('offers.items.3.name'),
      subtitle: tPage('offers.items.3.ingredients'),
      anotherText: '$8.50',
      buttonText: tCommon('buttonText.1'),
    },
  ]

  return (
    <>
      <Hero
        bgImage={fragrantCoffeeImg}
        bgAlt={tPage('hero.bgAlt')}
        overtitle={tPage('hero.overtitle')}
        title={tPage('hero.title')}
        textKey='homePage.hero.text'
        buttonText={tCommon('buttonText.0')}
      />
      <Info
        titleKey='homePage.aboutCoffee.title'
        paragraphsKeys={['homePage.aboutCoffee.paragraphs.0']}
        buttonText={tCommon('buttonText.1')}
        image={cupOfCoffeeFromCoffeeBeansImg}
        imageAlt={tPage('aboutCoffee.imageAlt')}
      />
      <SectionTemplate1
        titleKey='homePage.offers.title'
        subtitleKey='homePage.offers.subtitle'
      >
        {offers.map(offer => (
          <Card1 key={offer.title} {...offer} />
        ))}
      </SectionTemplate1>
    </>
  )
}
