import { cn } from '@/shared/lib'

export const styles = {
  nav: cn(
    'text-16 text-white-1 hidden gap-30',
    'md:flex',
    'lg:text-18 lg:gap-40',
    'xl:gap-60',
  ),
  buttonsWrapper: cn('hidden items-center gap-15', 'md:flex', 'lg:gap-35'),
  logInButton: cn('text-white-1 text-16', 'lg:text-18'),
}
