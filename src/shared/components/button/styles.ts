import { cn } from '@/shared/lib'

export const getStyles = (className: string | undefined) => ({
  button: cn(
    'bg-cream-1 text-black-1 cursor-pointer rounded-full px-26 py-12 font-bold',
    className,
  ),
})
