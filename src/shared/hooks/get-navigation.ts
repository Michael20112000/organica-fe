import { getTranslations } from 'next-intl/server'

export const getNavigation = async () => {
  const t = await getTranslations('navigation')

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

  const linksArray = Object.values(linksObj)

  return {
    linksObj,
    linksArray,
  }
}
