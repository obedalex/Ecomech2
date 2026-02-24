"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import HoverTap from "@/components/motion/HoverTap";

function ctaSection() {
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
      transition: { duration: 0.65, ease: [0.33, 1, 0.68, 1] },
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

  const contactItemVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -12, y: prefersReducedMotion ? 0 : 8 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const iconBob = prefersReducedMotion ? undefined : { y: [0, -2, 0] };
  const iconBobTransition = prefersReducedMotion
    ? undefined
    : { duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 lg:py-32 bg-linear-to-br from-green-600 to-emerald-700"
    >
      {/* animated glow + grain background */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 20%, rgba(255,255,255,0.12), transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(255,255,255,0.1), transparent 55%), radial-gradient(45% 45% at 60% 80%, rgba(74,222,128,0.18), transparent 65%)",
          backgroundSize: "120% 120%",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : { backgroundPosition: ["0% 0%", "12% 8%", "0% 0%"] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 18, repeat: Infinity, ease: "linear" }
        }
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variants={heroVariants} amount={0.35}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - CTA Content */}
            <Stagger
              className="space-y-6"
              stagger={0.08}
              delayChildren={0.08}
              amount={0.35}
              itemVariants={textItemVariants}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
                Ready to Transform Your Waste Into Sustainable Energy?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Partner with us to develop innovative waste-to-energy solutions
                tailored to your needs. Request a technical brief to learn how
                we can make your community greener.
              </p>
              <div>
                <HoverTap hoverScale={1.02} tapScale={0.985}>
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-green-600 dark:text-green-400 font-semibold shadow-md hover:shadow-lg transition-all"
                    asChild
                  >
                    <a href="mailto:info@ecomechghana.com">Contact Us</a>
                  </Button>
                </HoverTap>
              </div>
            </Stagger>

            {/* Right - Contact Info */}
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/20">
              <Stagger
                className="space-y-6"
                stagger={0.12}
                delayChildren={0.15}
                amount={0.3}
                itemVariants={contactItemVariants}
              >
                <h3 className="text-xl font-bold text-white">Get In Touch</h3>

                <motion.div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0"
                    animate={iconBob}
                    transition={iconBobTransition}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">Email Us</p>
                    <a
                      href="mailto:info@ecomechghana.com"
                      className="text-white hover:text-green-200 transition-colors font-semibold"
                    >
                      info@ecomechghana.com
                    </a>
                  </div>
                </motion.div>

                <motion.div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0"
                    animate={iconBob}
                    transition={iconBobTransition}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">Call Us</p>
                    <a
                      href="tel:+233000000000"
                      className="text-white hover:text-green-200 transition-colors font-semibold"
                    >
                      +233 (0) 000 000 000
                    </a>
                  </div>
                </motion.div>

                <motion.div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0"
                    animate={iconBob}
                    transition={iconBobTransition}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">Visit Us</p>
                    <p className="text-white font-semibold">
                      Ecomech Engineering Ltd <br />
                      20 Nii Tettey Kodjo II Road, GG-451-2525 <br />
                      Ayawaso Ga North, Accra G
                    </p>
                  </div>
                </motion.div>
              </Stagger>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ctaSection;
