import { Leaf, Factory, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
            <span className="inline-block text-sm font-semibold text-green-600 uppercase tracking-wider mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Transforming Environmental Challenges Into{" "}
              <span className="text-green-600">
                Green Sustainable Opportunities
              </span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mb-8" />

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Ecomech Engineering Ltd is an industrial process engineering
                company focused on turnkey Waste-to-Energy (WtE) plants. We
                design, build, and operate facilities that convert municipal
                solid waste into electricity, recover ferrous and non-ferrous
                metals from residues, and integrate emissions control systems to
                meet international standards.
              </p>
              <p>
                As a Ghanaian engineering and energy project development
                company, we drive large-scale sustainable infrastructure that
                integrates clean energy with environmental restoration.
              </p>
              <p className="font-medium text-foreground">
                We deliver innovative engineering solutions that convert
                environmental challenges into sustainable economic
                opportunities.
              </p>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 p-6 rounded-2xl bg-green-50 border-2 border-green-200 hover:border-green-500 hover:bg-green-100 transition-all duration-300"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <pillar.icon className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default About;
