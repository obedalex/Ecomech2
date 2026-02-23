// components/motion/Stagger.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/presets";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  containerVariants?: Variants;
  itemVariants?: Variants;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
};

export function Stagger({
  children,
  className,
  containerVariants,
  itemVariants,
  stagger = 0.08,
  delayChildren = 0,
  once = true,
  amount = 0.2,
}: StaggerProps) {
  const c = containerVariants ?? staggerContainer(stagger, delayChildren);
  const i = itemVariants ?? fadeUp(14);

  // Wrap each direct child in a motion.div so you don’t have to.
  const wrapped = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    return <motion.div variants={i}>{child}</motion.div>;
  });

  return (
    <motion.div
      className={className}
      variants={c}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {wrapped}
    </motion.div>
  );
}
