// components/motion/HoverTap.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

type HoverTapProps = {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  tapScale?: number;
};

export default function HoverTap({
  children,
  className,
  hoverScale = 1.03,
  tapScale = 0.98,
}: HoverTapProps) {
  const mergedClassName = ["transform-gpu will-change-transform", className]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      className={mergedClassName}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}
