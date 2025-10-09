export const useNavigation = () => {
  const linksObj = {
    home: {
      title: 'Home',
      href: '/',
    },
    aboutUs: {
      title: 'About us',
      href: '/about-us',
    },
    advantages: {
      title: 'Advantages',
      href: '/advantages',
    },
    contacts: {
      title: 'Contacts',
      href: '/contacts',
    },
  }

  const linksArray = Object.values(linksObj)

  return {
    linksObj,
    linksArray,
  }
}
