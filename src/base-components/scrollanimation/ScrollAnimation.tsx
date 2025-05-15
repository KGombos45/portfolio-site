import {motion, useInView} from 'framer-motion';
import React, {useRef, ReactNode, useMemo} from 'react';

export type ScrollAnimationProps = {
  children: ReactNode;
  animateIn?: 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown';
  animateOnce?: boolean;
  duration?: number;
  initiallyVisible?: boolean;
  delay?: number;
  className?: string;
  offset?: number;
};

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animateIn = 'slideInLeft',
  animateOnce = true,
  duration = 1.55,
  initiallyVisible = false,
  delay = 0.35,
  className,
  offset = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: animateOnce,
    margin: `${offset}px`,
  });

  const width = ref.current ? ref.current.getBoundingClientRect().width + 250 : 250;

  const animationVariants = useMemo(
    () => ({
      slideInLeft: {
        hidden: {opacity: 0, x: -width},
        visible: {opacity: 1, x: 0},
      },
      slideInRight: {
        hidden: {opacity: 0, x: width},
        visible: {opacity: 1, x: 0},
      },
      slideInUp: {
        hidden: {opacity: 0, y: 250},
        visible: {opacity: 1, y: 0},
      },
      slideInDown: {
        hidden: {opacity: 0, y: -250},
        visible: {opacity: 1, y: 0},
      },
    }),
    [width],
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initiallyVisible ? 'visible' : 'hidden'}
      animate={isInView ? 'visible' : 'hidden'}
      variants={animationVariants[animateIn]}
      transition={{delay, type: 'spring', stiffness: 100, damping: 21, mass: duration}}
      style={{
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </motion.div>
  );
};
