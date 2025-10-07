import { useState, useEffect } from 'react'

export const useMobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(true)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  useEffect(() => {
    document.body.classList.toggle('overflow-y-hidden', showMobileMenu)
  }, [showMobileMenu])

  return {
    showMobileMenu,
    toggleMobileMenu,
  }
}
