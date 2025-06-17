import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  forwardRef,
} from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SplashScroll = forwardRef(({ children, revealFooter }, ref) => {
  const y = useMotionValue(0);
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });
  const containerRef = useRef(null);

  useImperativeHandle(ref, () => containerRef.current); // Expose scroll container to parent

  useEffect(() => {
    if (!containerRef.current) return;

    if (revealFooter) {
      // Animate up to reveal footer (pulling black area up)
      y.set(-window.innerHeight);
    } else {
      // Reset back to normal
      y.set(0);
    }
  }, [revealFooter, y]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full bg-black text-white z-40 overflow-y-auto"
      style={{ y: smoothY }}
    >
      {/* Bottom padding ensures enough scroll area to trigger footer reveal */}
      <div className="min-h-full pb-[100vh]">{children}</div>
    </motion.div>
  );
});

export default SplashScroll;
