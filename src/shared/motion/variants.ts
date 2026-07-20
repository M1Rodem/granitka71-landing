import type { Variants } from 'framer-motion'

import { motionTokenValues } from './tokens'
import { motionTransitions } from './transitions'

export const fadeInVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: motionTransitions.default,
  },
} satisfies Variants

export const slideUpVariants = {
  initial: {
    opacity: 0,
    y: motionTokenValues.offset.lg,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: motionTransitions.default,
  },
} satisfies Variants

export const scaleInVariants = {
  initial: {
    opacity: 0,
    scale: motionTokenValues.scale.subtle,
  },
  animate: {
    opacity: 1,
    scale: motionTokenValues.scale.default,
    transition: motionTransitions.emphasis,
  },
} satisfies Variants

export const staggerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: motionTransitions.quick.duration,
      delayChildren: motionTransitions.quick.duration,
    },
  },
} satisfies Variants
