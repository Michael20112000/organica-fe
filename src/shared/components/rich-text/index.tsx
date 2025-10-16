import type { FC } from 'react'
import { useTranslations } from 'next-intl'

interface IProps {
  tKey: string
}

export const RichText: FC<IProps> = ({ tKey }) => {
  const t = useTranslations()

  return t.rich(tKey, {
    brPermanent: () => <br />,
    brMobile: () => <br className='sm:hidden' />,
    brSm: () => <br className='hidden sm:block' />,
    brSmOnly: () => <br className='hidden sm:block md:hidden' />,
    brMd: () => <br className='hidden md:block' />,
    brMdOnly: () => <br className='hidden md:block lg:hidden' />,
    brLg: () => <br className='hidden lg:block' />,
    brLgOnly: () => <br className='hidden lg:block xl:hidden' />,
    brXl: () => <br className='hidden xl:block' />,
    brXlOnly: () => <br className='hidden xl:block 2xl:hidden' />,
    br2Xl: () => <br className='hidden 2xl:block' />,
  })
}
