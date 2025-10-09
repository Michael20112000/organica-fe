import { cn } from '@/shared/lib'

export const getStyles = (className: string | undefined) => ({
  button: cn(
    'text-16 bg-cream-1 cursor-pointer rounded-full px-18 py-10 font-medium',
    'lg:text-18 lg:px-26 lg:py-14',
    className,
  )
})
