import type { Transition } from 'framer-motion'

import { motionTokenValues } from './tokens'

export const motionDurations = {
  fast: motionTokenValues.duration.fast,
  normal: motionTokenValues.duration.normal,
  slow: motionTokenValues.duration.slow,
} as const

export const motionEasings = {
  standard: motionTokenValues.easing.standard,
  emphasized: motionTokenValues.easing.emphasized,
  decelerate: motionTokenValues.easing.decelerate,
  accelerate: motionTokenValues.easing.accelerate,
} as const

export const motionTransitions = {
  default: {
    duration: motionDurations.normal,
    ease: motionEasings.standard,
  },
  emphasis: {
    duration: motionDurations.slow,
    ease: motionEasings.emphasized,
  },
  quick: {
    duration: motionDurations.fast,
    ease: motionEasings.standard,
  },
} satisfies Record<string, Transition>
