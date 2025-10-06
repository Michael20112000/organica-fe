import { cn } from '@/shared/lib'

export const getStyles = (showMobileMenu: boolean) => ({
  mobileMenu: cn(
    `bg-black-1/95 fixed top-60 right-0 bottom-0 left-0 duration-300 ${!showMobileMenu && 'translate-x-full'}`,
    'md:hidden',
  ),
})
