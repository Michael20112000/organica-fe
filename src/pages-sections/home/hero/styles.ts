import { cn } from '@/shared/lib'

export const styles = {
  section: cn('offset-top relative h-screen'),
  bgImage: cn('object-cover'),
  eclipse: cn(
    'from-black-1 via-black-1/80 absolute inset-0 bg-gradient-to-r to-transparent',
  ),
  content: cn(
    'text-white-1 relative container flex h-full flex-col items-start justify-center',
  ),
  overtitle: cn('text-18 font-medium', 'md:text-22'),
  title: cn('text-120 font-clicker-script', 'md:text-220'),
  text: cn('mb-20', 'md:text-20'),
  button: cn('text-black-1'),
}
