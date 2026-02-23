// lib/motion/MotionProvider.tsx
"use client";

import React from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import { easeOut } from "./presets";

type MotionProviderProps = {
  children: React.ReactNode;
};

export default function MotionProvider({ children }: MotionProviderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig
      reducedMotion={prefersReducedMotion ? "always" : "never"}
      transition={{ duration: 0.5, ease: easeOut }}
    >
      {children}
    </MotionConfig>
  );
}
