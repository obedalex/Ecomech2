"use client";

import { Leaf, Factory, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import FadeIn from "@/components/motion/FadeIn";
import Reveal from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import HoverTap from "@/components/motion/HoverTap";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

function About() {
  const pillars: Pillar[] = [
    {
      icon: Leaf,
      title: "Renewable Energy",
      description:
        "Converting waste into clean, sustainable power for communities",
    },
    {
      icon: Factory,
      title: "Waste Management",
      description:
        "Minimizing landfill impact through advanced processing systems",
    },
    {
      icon: Wrench,
      title: "Industrial Engineering",
      description: "Designing and building world-class energy infrastructure",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <FadeIn delay={0.05}>
              <span className="inline-block text-sm font-semibold text-green-600 uppercase tracking-wider mb-4">
                Who We Are
              </span>
            </FadeIn>

            <FadeIn delay={0.12} y={18}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Transforming Environmental Challenges Into{" "}
                <span className="text-green-600">
                  Green Sustainable Opportunities
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={12}>
              <div className="w-20 h-1 bg-green-500 mb-8" />
            </FadeIn>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <Reveal delay={0.24}>
                <p>
                  Ecomech Engineering Ltd is an industrial process engineering
                  company focused on turnkey Waste-to-Energy (WtE) plants. We
                  design, build, and operate facilities that convert municipal
                  solid waste into electricity, recover ferrous and non-ferrous
                  metals from residues, and integrate emissions control systems
                  to meet international standards.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p>
                  As a Ghanaian engineering and energy project development
                  company, we drive large-scale sustainable infrastructure that
                  integrates clean energy with environmental restoration.
                </p>
              </Reveal>

              <Reveal delay={0.36}>
                <p className="font-medium text-foreground">
                  We deliver innovative engineering solutions that convert
                  environmental challenges into sustainable economic
                  opportunities.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <Stagger className="grid gap-6" stagger={0.1} delayChildren={0.05}>
            {pillars.map((pillar, index) => (
              <HoverTap key={index} hoverScale={1.015} tapScale={0.99}>
                <div className="group flex items-start gap-5 p-6 rounded-2xl bg-green-50 border-2 border-green-200 hover:border-green-500 hover:bg-green-100 transition-all duration-300">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <pillar.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </HoverTap>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

export default About;
