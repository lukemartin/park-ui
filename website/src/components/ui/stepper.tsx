import type { PropsWithChildren } from 'react'
import { Box, Circle, Stack } from 'styled-system/jsx'
import { Heading } from './heading'

export const Steps = (props: PropsWithChildren) => {
  return (
    <Stack gap="10" position="relative">
      <Box width="1px" height="full" bg="border.default" position="absolute" left="4" top="0" />
      {props.children}
    </Stack>
  )
}

type StepProps = {
  number: string
  title: string
}

export const Step = (props: PropsWithChildren<StepProps>) => {
  const { number, title, children } = props
  return (
    <Box>
      <Stack direction="row" gap="4">
        <Circle
          size="8"
          bg="bg.subtle"
          borderWidth="1px"
          zIndex={1}
          boxShadow="0 0 0 12px var(--colors-bg-canvas)"
          fontWeight="semibold"
        >
          {number}
        </Circle>
        <Heading as="h3" my="0!">
          {title}
        </Heading>
      </Stack>
      <Box ps="12">{children}</Box>
    </Box>
  )
}
