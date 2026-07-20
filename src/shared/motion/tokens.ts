export const motionTokenValues = {
  duration: {
    fast: 0.15,
    normal: 0.24,
    slow: 0.36,
  },
  easing: {
    standard: [0.2, 0, 0, 1],
    emphasized: [0.2, 0.8, 0.2, 1],
    decelerate: [0, 0, 0, 1],
    accelerate: [0.3, 0, 1, 1],
  },
  offset: {
    sm: 8,
    md: 16,
    lg: 24,
  },
  scale: {
    subtle: 0.96,
    default: 1,
  },
} as const
