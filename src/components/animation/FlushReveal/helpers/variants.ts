import { Variants } from 'framer-motion';

export const FLUSH_CONTAINER_VARIANT: Variants = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25 + index * 0.05,
    },
  }),
  exit: {
    opacity: 0,
    y: 75,
  },
};

export const FLUSH_POINTER_VARIANT: Variants = {
  visible: (isInView: boolean) => ({
    left: isInView ? '100%' : 0,
    display: 'none',
  }),
  hidden: () => ({
    left: 0,
    transition: {
      duration: 0.5,
      delay: 0,
      ease: 'easeIn',
    },
  }),
  exit: () => ({
    left: 0,
    transition: {
      duration: 0.5,
      delay: 0,
      ease: 'easeIn',
    },
  }),
};
