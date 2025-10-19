import { cn } from '@/shared/lib'

export const getStyles = (className?: string) => ({
  title: cn(
    'text-35 text-brown-1 leading-[1.4em] font-bold',
    'md:text-54',
    className,
  ),
})
