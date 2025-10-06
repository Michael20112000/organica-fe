import { useState } from 'react'

export const useMobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return {
    showMobileMenu,
    toggleMobileMenu,
  }
}
