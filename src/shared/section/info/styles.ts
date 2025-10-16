import { cn } from '@/shared/lib'

export const styles = {
  section: cn('mt-80'),
  container: cn(
    'container flex flex-col items-center',
    'md:flex-row',
    'lg:gap-60',
  ),
  textContent: cn(''),
  title: cn('text-35 text-brown-1 leading-[1.4em] font-bold', 'md:text-54'),
  allParagraphsWrapper: cn(
    'text-gray-1 text-18 my-[1.5em] flex flex-col gap-[1em]',
    'md:text-20',
  ),
  imageWrapper: cn(
    'relative h-210 min-w-270 [&>img]:object-cover',
    'md:h-280 md:min-w-370',
    'lg:h-484 lg:min-w-500',
  ),
}
