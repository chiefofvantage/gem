// // import { motion } from "framer-motion";
// // import { useInView } from "framer-motion";

// // // Helper function to create animated components
// // const createAnimatedComponent = (
// //   WrappedComponent,
// //   variants,
// //   options = { once: true, amount: 0.5 }
// // ) => {
// //   return function AnimatedComponent(props) {
// //     const [ref, inView] = useInView(options);
// //     return (
// //       <motion.div
// //         ref={ref}
// //         initial="hidden"
// //         animate={inView ? "visible" : "hidden"}
// //         variants={variants}
// //         transition={{ duration: 0.5 }}
// //       >
// //         <WrappedComponent {...props} />
// //       </motion.div>
// //     );
// //   };
// // };

// // // Fade In animation
// // export const withFadeIn = (WrappedComponent) =>
// //   createAnimatedComponent(WrappedComponent, {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1 },
// //   });

// // // Slide from Left animation
// // export const withSlideFromLeft = (WrappedComponent) =>
// //   createAnimatedComponent(WrappedComponent, {
// //     hidden: { x: -100, opacity: 0 },
// //     visible: { x: 0, opacity: 1 },
// //   });

// // // Slide from Right animation
// // export const withSlideFromRight = (WrappedComponent) =>
// //   createAnimatedComponent(WrappedComponent, {
// //     hidden: { x: 100, opacity: 0 },
// //     visible: { x: 0, opacity: 1 },
// //   });

// // // Slide from Top animation
// // export const withSlideFromTop = (WrappedComponent) =>
// //   createAnimatedComponent(WrappedComponent, {
// //     hidden: { y: -100, opacity: 0 },
// //     visible: { y: 0, opacity: 1 },
// //   });

// // // Slide from Bottom animation
// // export const withSlideFromBottom = (WrappedComponent) =>
// //   createAnimatedComponent(WrappedComponent, {
// //     hidden: { y: 100, opacity: 0 },
// //     visible: { y: 0, opacity: 1 },
// //   });

// // // Scale animation
// // export const withScale = (WrappedComponent) =>
// //   createAnimatedComponent(WrappedComponent, {
// //     hidden: { scale: 0, opacity: 0 },
// //     visible: { scale: 1, opacity: 1 },
// //   });

// // // Rotate animation
// // export const withRotate = (WrappedComponent) =>
// //   createAnimatedComponent(WrappedComponent, {
// //     hidden: { rotate: 180, opacity: 0 },
// //     visible: { rotate: 0, opacity: 1 },
// //   });

// // // Flip animation
// // export const withFlip = (WrappedComponent) =>
// //   createAnimatedComponent(WrappedComponent, {
// //     hidden: { rotateY: 180, opacity: 0 },
// //     visible: { rotateY: 0, opacity: 1 },
// //   });

// // components/SlideFromRightFadeIn.js
// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const SlideFromRightFadeIn = ({ children, delay = 0, duration = 0.5 }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const variants = {
//     hidden: {
//       x: 100,
//       opacity: 0,
//     },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         duration: duration,
//         delay: delay,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={variants}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default SlideFromRightFadeIn;

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const createAnimationComponent = (variants) => {
  return ({ children, delay = 0, duration = 0.5 }) => {
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
};

export const FadeIn = createAnimationComponent({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
});

export const SlideFromLeft = createAnimationComponent({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
});

export const SlideFromRight = createAnimationComponent({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
});

export const SlideFromTop = createAnimationComponent({
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
});

export const SlideFromBottom = createAnimationComponent({
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
});

export const SlideFromLeftAndFadeIn = createAnimationComponent({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
});

export const SlideFromRightAndFadeIn = createAnimationComponent({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
});

export const SlideFromTopAndFadeIn = createAnimationComponent({
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
});

export const SlideFromBottomAndFadeIn = createAnimationComponent({
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
});
