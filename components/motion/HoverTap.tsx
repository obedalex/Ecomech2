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
  return (
    <motion.div
      className={className}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
    >
      {children}
    </motion.div>
  );
}
