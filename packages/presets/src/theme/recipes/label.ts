import { defineRecipe } from '@pandacss/dev'

export const label = defineRecipe({
  className: 'label',
  base: {
    color: 'fg.emphasized',
    fontWeight: 'medium',
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        textStyle: 'sm',
      },
      md: {
        textStyle: 'sm',
      },
      lg: {
        textStyle: 'sm',
      },
      xl: {
        textStyle: 'md',
      },
    },
  },
})
