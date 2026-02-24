import Image from "next/image";

function Projects() {
  const features = [
    {
      title: "Municipal Waste to Energy",
      description:
        "Multi-stage particulate capture, acid gas scrubbing, and selective catalytic reduction to comply with stringent emission thresholds.",
    },
    {
      title: "Power & Heat Generation",
      description:
        "Efficient energy recovery through optimized steam cycles and turbine-generator systems for sustainable baseload operation.",
    },
    {
      title: "Sustainable Waste Solution",
      description:
        "An integrated approach that minimizes landfill use and maximizes resource recovery for long-term sustainability.",
    },
  ];

  

  return (
    <section id="projects" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-sm font-semibold text-green-600 uppercase tracking-wider mb-4">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Thermal Recovery Facility:{" "}
            <span className="text-green-600">
              Green Waste-to-Energy Project
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our pioneering project converts municipal waste into valuable energy
            resources, generating both power and heat. By harnessing the energy
            potential of waste, we reduce landfill waste, lower greenhouse gas
            emissions, and provide a sustainable solution for energy generation.
          </p>
        </div>

        {/* Project Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column: Project Image & Diagram */}
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden border-2 border-green-300 shadow-lg relative w-full h-64 md:h-80 lg:h-96">
              <Image
                src="/waste-management.jpg"
                alt="WtE Process Flowchart"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            {/* <div className="rounded-3xl overflow-hidden border-2 border-green-300 shadow-lg relative w-full h-64 md:h-80 lg:h-96">
              <Image
                src="/industrial-machinery-excavator-at-waste-processing.jpg"
                alt="Waste processing facility"
                fill
                className="object-cover"
              />
            </div> */}
          </div>

          {/* Right column: Key Features */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-12 h-1 bg-green-500" />
              Key Features
            </h3>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
