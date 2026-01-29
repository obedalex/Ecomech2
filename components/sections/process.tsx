import { Zap, Flame, Wind, Fuel } from "lucide-react";
import Image from "next/image";

function Process() {
  const wasteDryingBenefits = [
    {
      icon: Zap,
      title: "Increase Calorific Value",
      description:
        "Enhancing the fuel quality of waste by removing excess moisture and increasing the energy yield for efficient combustion.",
    },
    {
      icon: Flame,
      title: "Improve Combustion Efficiency",
      description:
        "Reducing moisture and improving burn quality to ensure more complete combustion with minimal energy loss.",
    },
    {
      icon: Wind,
      title: "Decrease Flue Gas Volume",
      description:
        "Minimizing gas emissions and optimizing plant efficiency by ensuring drier, higher-calorific waste input.",
    },
    {
      icon: Fuel,
      title: "Reduce Auxiliary Fuel Use",
      description:
        "Lowering reliance on external fuel sources by improving waste self-sustainability and energy recovery efficiency.",
    },
  ];

  const pollutionControlSystems = [
    "Selective Catalytic Reduction (SCR)",
    "Activated Carbon injection to trap dioxins, furans and mercury",
    "Baghouse filters for PM10 and fine dust capture",
    "Wet scrubbers for acid gas neutralization",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Collection",
      description: "Municipal waste gathered from communities",
    },
    {
      step: "02",
      title: "Pre-treatment",
      description: "Sorting, drying, and material separation",
    },
    {
      step: "03",
      title: "Conversion",
      description: "Thermal processing in controlled environment",
    },
    {
      step: "04",
      title: "Generation",
      description: "Steam turbine power production",
    },
    {
      step: "05",
      title: "Recovery",
      description: "Metal extraction and residue processing",
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider mb-4">
            Our Green Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            From Waste to{" "}
            <span className="text-green-600 dark:text-green-400">
              Clean Renewable Energy
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive waste-to-energy process designed for maximum
            recycling efficiency and environmental protection.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-green-300 dark:bg-green-700" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((item) => (
                <div key={item.step} className="relative text-center">
                  {/* Step Number */}
                  <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Waste Drying Section */}
        <div className="bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-3xl border-2 border-green-200 dark:border-green-800 p-8 lg:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
               Waste Drying Technology
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in waste drying as a vital pre-treatment process
              within waste-to-energy systems. By reducing moisture content
              upfront, we help optimize system performance and ensure cleaner,
              more sustainable energy conversion.
            </p>
            <p className="text-sm text-green-700 dark:text-green-400 font-medium mt-4">
              Ecomech uses the Recirculated Flue Gas Drying method for maximum
              environmental benefit.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wasteDryingBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-6 rounded-2xl bg-white dark:bg-gray-900 border-2 border-green-200 dark:border-green-800 hover:border-green-500 dark:hover:border-green-600 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Air Pollution Control */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl border-2 border-green-300 dark:border-green-800 p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Green Air Pollution Control Systems
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our multi-stage emission control systems ensure compliance with
                the strictest international environmental standards while
                protecting air quality.
              </p>
              <ul className="space-y-4">
                {pollutionControlSystems.map((system, index) => (
                  <li key={system} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-400 dark:border-green-700">
                      <span className="text-xs font-bold text-green-600 dark:text-green-400">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-foreground">{system}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-green-300 dark:border-green-800 shadow-md">
              <Image
                src="/waste to energy4.png"
                alt="Energy cycle diagram"
                width={800}
                height={600}
                className="w-full h-auto"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
