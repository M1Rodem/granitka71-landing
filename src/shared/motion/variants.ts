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

// ===== МОБИЛЬНОЕ МЕНЮ =====

// Контейнер меню - "раскрытие" из Header
export const menuContainerVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
    scale: 0.94,
    rotateX: -6,
    transformPerspective: 1200,
    transformOrigin: 'top center',
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 340,
      damping: 28,
      mass: 0.9,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.97,
    rotateX: -4,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
}

// Контент меню с последовательным появлением
export const menuContentVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
}

// Элементы меню - появляются снизу с блюром (устаревший вариант, используйте mobileMenuItemVariants)
export const menuItemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 16,
    scale: 0.96,
    filter: 'blur(6px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 35,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    filter: 'blur(4px)',
    transition: {
      duration: 0.15,
      ease: [0.4, 0, 1, 1],
    },
  },
}

// CTA - появляется последней с эффектом "вылета" (устаревший вариант, используйте mobileCtaVariants)
export const menuCtaVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
    scale: 0.92,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 30,
      delay: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 16,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
}

// Оверлей - кинематографичный
export const overlayVariants: Variants = {
  initial: {
    opacity: 0,
    backdropFilter: 'blur(0px) saturate(1)',
  },
  animate: {
    opacity: 1,
    backdropFilter: 'blur(32px) saturate(0.7)',
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    backdropFilter: 'blur(0px) saturate(1)',
    transition: {
      duration: 0.35,
      ease: [0.32, 0, 0.67, 0],
    },
  },
}

// ===== НОВЫЕ УЛУЧШЕННЫЕ ВАРИАНТЫ ДЛЯ МОБИЛЬНОГО МЕНЮ =====

// Элементы меню - улучшенное появление
export const mobileMenuItemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
    scale: 0.92,
    filter: 'blur(8px)',
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
      mass: 0.7,
      delay: 0.06 * i,
    },
  }),
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.95,
    filter: 'blur(6px)',
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
}

// CTA - улучшенное появление с пульсацией
export const mobileCtaVariants: Variants = {
  initial: {
    opacity: 0,
    y: 32,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 350,
      damping: 28,
      mass: 0.8,
      delay: 0.35,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.93,
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 1, 1],
    },
  },
}