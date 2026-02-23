// components/motion/FadeIn.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { fadeUp } from "@/lib/presets";


type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  y = 12,
  duration = 0.45,
  once = true,
  amount = 0.2,
}: FadeInProps) {
  const variants: Variants = fadeUp(y, {
    duration,
    ease: [0.16, 1, 0.3, 1],
    delay,
  });

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
