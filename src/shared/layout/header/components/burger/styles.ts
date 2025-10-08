import { cn } from '@/shared/lib'

export const getStyles = (isActive: boolean) => ({
  burger: cn('relative flex h-30 w-40 flex-col items-center justify-center'),
  cutlet: cn('bg-white-1 absolute h-4 w-40 rounded-full duration-300'),
  cutletTop: cn(isActive ? 'rotate-45' : '-mt-18'),
  cutletMiddle: cn(isActive ? 'w-0' : 'w-full'),
  cutletBottom: cn(isActive ? '-rotate-45' : 'mt-18'),
})
