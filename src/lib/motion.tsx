"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export function useHorizontalParallax(
  ref: RefObject<HTMLElement | null>,
  from: number,
  springConfig = { stiffness: 60, damping: 20 }
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [from, 0]);
  return useSpring(raw, springConfig);
}

export function useOpacityParallax(ref: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "40% center"],
  });
  return useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 60,
    damping: 20,
  });
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(to / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function RevealSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideFromLeft({
  children,
  className = "",
  distance = 140,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useHorizontalParallax(ref, -distance);
  const opacity = useOpacityParallax(ref);
  return (
    <motion.div ref={ref} style={{ x, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

export function SlideFromRight({
  children,
  className = "",
  distance = 140,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useHorizontalParallax(ref, distance);
  const opacity = useOpacityParallax(ref);
  return (
    <motion.div ref={ref} style={{ x, opacity }} className={className}>
      {children}
    </motion.div>
  );
}
