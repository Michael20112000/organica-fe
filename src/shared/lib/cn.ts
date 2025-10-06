import { extendTailwindMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [(value: string) => /^\d+$/.test(value)],
        },
      ],
    },
  },
})

export const cn = (...inputs: ClassValue[]) => customTwMerge(clsx(inputs))
