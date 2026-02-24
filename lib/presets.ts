// lib/motion/presets.ts
import type { Variants, Transition } from "framer-motion";

/**
 * GLOBAL DELAY MULTIPLIER
 * Keeps individual delays small while allowing coarse tuning.
 */
export const DELAY_MULTIPLIER = 1.8;

/**
 * Softer premium easing
 */
export const easeOut: Transition["ease"] = [0.33, 1, 0.68, 1];

/**
 * Base transition (slower overall)
 */
export const baseTransition: Transition = {
  duration: 0.5,
  ease: easeOut,
};

/**
 * Utility to multiply delay automatically
 */
const withDelay = (transition: Transition = baseTransition): Transition => ({
  ...transition,
  delay: (transition.delay ?? 0) * DELAY_MULTIPLIER,
});

/**
 * Fade only
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: withDelay(baseTransition),
  },
};

/**
 * Fade up
 */
export const fadeUp = (
  y: number = 16,
  transition: Transition = baseTransition,
): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: withDelay(transition),
  },
});

/**
 * Slide in
 */
export const slideIn = (
  direction: "left" | "right" | "up" | "down" = "left",
  distance: number = 24,
  transition: Transition = baseTransition,
): Variants => {
  const axis =
    direction === "left" || direction === "right"
      ? { x: direction === "left" ? -distance : distance }
      : { y: direction === "up" ? -distance : distance };

  return {
    hidden: { opacity: 0, ...axis },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: withDelay(transition),
    },
  };
};

/**
 * Scale in
 */
export const scaleIn = (
  scale: number = 0.96,
  transition: Transition = baseTransition,
): Variants => ({
  hidden: { opacity: 0, scale },
  show: {
    opacity: 1,
    scale: 1,
    transition: withDelay(transition),
  },
});

/**
 * Stagger container (150% slower)
 */
export const staggerContainer = (
  stagger: number = 0.14,
  delayChildren: number = 0.2,
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger * DELAY_MULTIPLIER,
      delayChildren: delayChildren * DELAY_MULTIPLIER,
    },
  },
});

/**
 * Gentle spring (for pop effects)
 */
export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 240,
  damping: 20,
};
