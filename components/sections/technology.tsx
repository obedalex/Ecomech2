import React from "react";
import { Flame, Recycle, Wind, Magnet } from "lucide-react";

function Technology() {
  const technologies = [
    {
      icon: Flame,
      title: "Thermal Conversion",
      description:
        "Our advanced thermal systems transform diverse waste streams into clean energy—maximizing efficiency while eliminating residue.",
      features: [
        "Controlled combustion",
        "Gasification pathways",
        "Heterogeneous MSW processing",
      ],
    },
    {
      icon: Recycle,
      title: "Energy Recovery",
      description:
        "High-efficiency steam cycles and turbine-generator sets sized for baseload and grid-support operation.",
      features: [
        "Steam turbine generation",
        "Heat integration",
        "Grid synchronization",
      ],
    },
    {
      icon: Wind,
      title: "Emission Control",
      description:
        "Multi-stage particulate capture and selective catalytic reduction to meet stringent emission thresholds.",
      features: [
        "Acid gas scrubbing",
        "Particulate capture",
        "Catalytic reduction",
      ],
    },
    {
      icon: Magnet,
      title: "Metal Recovery",
      description:
        "Magnetic separation and slag processing lines extract ferrous and non-ferrous metals from residues.",
      features: [
        "Ferrous extraction",
        "Non-ferrous recovery",
        "Residue stabilization",
      ],
    },
  ];

  return (
    <section id="technology" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-green-600 uppercase tracking-wider mb-4">
            Our Green Technology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Advanced Systems for{" "}
            <span className="text-green-600">Sustainable Waste Recycling</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Integrated waste-to-energy technology that transforms refuse into
            renewable energy while protecting the environment.
          </p>
        </div>

        {/* Equal Size Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.title}
              className="group relative p-8 rounded-3xl bg-card border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                <tech.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {tech.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {tech.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {tech.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technology;
