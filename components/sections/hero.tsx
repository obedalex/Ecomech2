"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import HoverTap from "@/components/motion/HoverTap";

function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const heroVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 24,
      scale: prefersReducedMotion ? 1 : 0.98,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const kenBurnsAnim = prefersReducedMotion
    ? undefined
    : { scale: [1.02, 1.06], x: [0, -4], y: [0, -2] };

  const kenBurnsTransition = prefersReducedMotion
    ? undefined
    : { duration: 16, repeat: Infinity, repeatType: "mirror", ease: "linear" };

  return (
    <section className="relative w-full h-[70vh] min-h-125 flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        animate={kenBurnsAnim}
        transition={kenBurnsTransition}
      >
        <Image
          src="/engineers2.jpg"
          fill
          priority
          alt="Industrial waste-to-energy facility"
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <Reveal variants={heroVariants} amount={0.4}>
        <Stagger
          className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6"
          stagger={0.08}
          delayChildren={0.08}
          amount={0.4}
          itemVariants={textItemVariants}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Innovating Waste-to-Electricity Systems with Integrated Metal Recovery
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Industrial-scale conversion of municipal solid waste (MSW) into
            dispatchable electrical power using advanced thermal conversion,
            steam turbine generation, and automated metal recovery.
          </p>

          <div className="pt-2">
            <HoverTap hoverScale={1.02} tapScale={0.985}>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="mailto:info@ecomechghana.com">Contact Us</a>
              </Button>
            </HoverTap>
          </div>
        </Stagger>
      </Reveal>
    </section>
  );
}

export default Hero;
