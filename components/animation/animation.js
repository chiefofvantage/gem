import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const createAnimationComponent = (variants, displayName) => {
  const AnimationComponent = ({ children, delay = 0, duration = 0.5 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      triggerOnce: true,
      threshold: 0.1,
    });

    const animationVariants = {
      hidden: variants.hidden,
      visible: {
        ...variants.visible,
        transition: {
          duration: duration,
          delay: delay,
          ease: "easeOut",
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animationVariants}
      >
        {children}
      </motion.div>
    );
  };

  // Set displayName for debugging purposes
  AnimationComponent.displayName = displayName;
  return AnimationComponent;
};

export const FadeIn = createAnimationComponent(
  {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "FadeIn"
);

export const SlideFromLeft = createAnimationComponent(
  {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  "SlideFromLeft"
);

export const SlideFromRight = createAnimationComponent(
  {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  "SlideFromRight"
);

export const SlideFromTop = createAnimationComponent(
  {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  "SlideFromTop"
);

export const SlideFromBottom = createAnimationComponent(
  {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  "SlideFromBottom"
);

export const SlideFromLeftAndFadeIn = createAnimationComponent(
  {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  "SlideFromLeftAndFadeIn"
);

export const SlideFromRightAndFadeIn = createAnimationComponent(
  {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  "SlideFromRightAndFadeIn"
);

export const SlideFromTopAndFadeIn = createAnimationComponent(
  {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  "SlideFromTopAndFadeIn"
);

export const SlideFromBottomAndFadeIn = createAnimationComponent(
  {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  "SlideFromBottomAndFadeIn"
);
