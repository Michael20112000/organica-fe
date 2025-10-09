import { cn } from '@/shared/lib'

const cutlet = cn('bg-white-1 absolute h-4 w-40 rounded-full duration-300')

export const getStyles = (isActive: boolean) => ({
  burger: cn(
    'relative flex h-30 w-40 flex-col items-center justify-center',
    'md:hidden',
  ),
  cutletTop: cn(cutlet, isActive ? 'rotate-45' : '-mt-18'),
  cutletMiddle: cn(cutlet, isActive ? 'w-0' : 'w-full'),
  cutletBottom: cn(cutlet, isActive ? '-rotate-45' : 'mt-18'),
})
