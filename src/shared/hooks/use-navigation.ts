import { useTranslations } from 'next-intl'

export const useNavigation = () => {
  const t = useTranslations('common.navigation')

  const linksObj = {
    home: {
      title: t('home'),
      href: '/',
    },
    aboutUs: {
      title: t('aboutUs'),
      href: '/about-us',
    },
    advantages: {
      title: t('advantages'),
      href: '/advantages',
    },
    contacts: {
      title: t('contacts'),
      href: '/contacts',
    },
  }

  return { linksObj, linksArray: Object.values(linksObj) }
}
