import classNames from 'classnames';
import { AnimationProps, motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import { FLUSH_POINTER_VARIANT } from './helpers/variants';

export interface IFlushRevealProps extends AnimationProps {
  rootClassName?: string;
  pointerClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
  mode?: 'wait' | 'sync' | 'popLayout';
  keyId?: string | number;
  index?: number;
}

const FlushReveal: React.FC<IFlushRevealProps> = ({
  children,
  rootClassName,
  pointerClassName,
  keyId,
}) => {
  const rootClassNames = classNames('w-fit relative overflow-hidden', rootClassName);
  const pointerClassNames = classNames(
    'absolute w-full h-full bg-neutral-1 z-10 top-0 left-0',
    pointerClassName,
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref} className={rootClassNames} key={keyId}>
      {children}
      <motion.div
        className={pointerClassNames}
        custom={isInView}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={FLUSH_POINTER_VARIANT}
      />
    </motion.div>
  );
};

export default FlushReveal;
