import { defineRecipe } from '@pandacss/dev'

export const alert = defineRecipe({
  className: 'alert',
  base: {
    background: 'bg.default',
    borderRadius: 'l3',
    borderWidth: '1px',
    p: '4',
    textStyle: 'sm',
    width: 'full',
  },
})
