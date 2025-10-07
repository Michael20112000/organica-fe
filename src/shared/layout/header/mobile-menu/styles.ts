import { cn } from '@/shared/lib'

export const getStyles = (showMobileMenu: boolean) => ({
  mobileMenu: cn(
    'fixed top-60 right-0 bottom-0 left-0',
    `duration-300 ${!showMobileMenu && 'translate-x-full'}`,
    `bg-black-1/95 container flex flex-col justify-between gap-30 pb-[10vh]`,
    'text-22 text-white-1',
    'md:hidden',
  ),
  nav: cn('my-auto overflow-y-auto', 'flex flex-col items-center gap-20 py-30'),
  mobileMenuFooter: cn('flex flex-col items-center gap-20'),
})
