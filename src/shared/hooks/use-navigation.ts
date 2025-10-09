export const useNavigation = () => {
  const linksObj = {
    home: {
      title: 'home',
      href: '/',
    },
    aboutUs: {
      title: 'aboutUs',
      href: '/about-us',
    },
    advantages: {
      title: 'advantages',
      href: '/advantages',
    },
    contacts: {
      title: 'contacts',
      href: '/contacts',
    },
  }

  const linksArray = Object.values(linksObj)

  return {
    linksObj,
    linksArray,
  }
}
