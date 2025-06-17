import { forwardRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SplashScroll = forwardRef(({ children, revealFooter }, ref) => {
  const y = useMotionValue(0);
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const offset = revealFooter ? -window.innerHeight : 0;
    y.set(offset);
  }, [revealFooter, y]);

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 w-full h-full bg-black text-white z-40 overflow-y-auto"
      style={{ y: smoothY }}
    >
      <div className="min-h-full pb-[100vh]">{children}</div>
    </motion.div>
  );
});

export default SplashScroll;
