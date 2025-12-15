import { type ReactNode, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export const PageWrapper = ({ children, className = "" }: PageWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // GSAP entrance effect for content
      gsap.fromTo(
        containerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative w-full h-screen overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};
