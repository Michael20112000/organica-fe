import { useState, useEffect } from 'react'

export const useDrawer = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleDrawer = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    document.body.classList.toggle('overflow-y-hidden', isActive)
  }, [isActive])

  return {
    showDrawer: isActive,
    toggleDrawer,
  }
}
