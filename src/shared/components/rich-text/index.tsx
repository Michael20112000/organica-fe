import { useTranslations } from 'next-intl'

interface IProps {
  translationKey: string
}

export const RichText = ({ translationKey }: IProps) => {
  const t = useTranslations()

  return t.rich(translationKey, {
    brPermanent: () => <br />,
    brSmOnly: () => <br className='hidden sm:block md:hidden' />,
    brMd: () => <br className='hidden md:block' />,
    brLg: () => <br className='hidden lg:block' />,
    brXl: () => <br className='hidden xl:block' />,
    br2Xl: () => <br className='hidden 2xl:block' />,
  })
}
