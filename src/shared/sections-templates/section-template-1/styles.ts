import { cn } from '@/shared/lib'

export const styles = {
  section: cn('mt-80'),
  subtitle: cn('text-18 mt-16 mb-32 text-center', 'md:text-20'),
  content: cn(
    'grid grid-cols-1 gap-x-20 gap-y-60',
    'sm:grid-cols-2',
    'lg:grid-cols-4',
  ),
}
