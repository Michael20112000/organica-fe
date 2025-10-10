import { cn } from '@/shared/lib'

export const getStyles = (isActive: boolean) => ({
  link: cn(
    'border-b-2 border-b-transparent transition-colors duration-200',
    isActive && 'text-cream-1 border-b-cream-1',
  ),
})
