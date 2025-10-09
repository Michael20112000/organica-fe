import { cn } from '@/shared/lib'

export const styles = {
  mobileMenu: cn(
    'container flex h-full flex-col justify-between gap-30 pb-[10vh]',
    'text-22 text-white-1',
  ),
  nav: cn('my-auto overflow-y-auto', 'flex flex-col items-center gap-20 py-30'),
}
