import { useState } from 'react'

export const useDrawer = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleDrawer = () => {
    setIsActive(!isActive)
  }

  return {
    showDrawer: isActive,
    toggleDrawer,
  }
}
