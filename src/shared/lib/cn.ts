import { extendTailwindMerge, type ClassNameValue } from 'tailwind-merge'

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

// For WebStorm Tailwind plugin: add this to Experimental config so classes in `cn()` are detected
export const cn = (...inputs: ClassNameValue[]) => customTwMerge(...inputs)
