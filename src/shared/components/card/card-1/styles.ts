import { cn } from '@/shared/lib'

export const styles = {
  card: cn('bg-white-3'),
  imageWrapper: cn('relative h-222'),
  image: cn('object-cover'),
  content: cn('border-cream-1/40 relative flex flex-col items-center gap-6 border pt-14 pb-42 text-center'),
  title: cn('text-brown-1 text-22 font-bold'),
  subtitle: cn('text-black-1'),
  anotherText: cn('text-brown-1 text-18 font-bold'),
  button: cn('absolute bottom-0 translate-y-1/2')
}
