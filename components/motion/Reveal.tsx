// components/motion/Reveal.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { fadeUp } from "@/lib/presets";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: number;
};

export default function Reveal({
  children,
  className,
  variants,
  delay = 0,
  y = 16,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const v =
    variants ?? fadeUp(y, { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay });

  return (
    <motion.div
      className={className}
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
