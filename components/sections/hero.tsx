import Image from "next/image";
import { Button } from "@/components/ui/button";

 function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-125 flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
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
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
          Innovating Waste-to-Electricity Systems with Integrated Metal Recovery
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
          Industrial-scale conversion of municipal solid waste (MSW) into
          dispatchable electrical power using advanced thermal conversion,
          steam turbine generation, and automated metal recovery.
        </p>

        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          asChild
        >
          <a href="mailto:info@ecomechghana.com">Contact Us</a>
        </Button>
      </div>
    </section>
  );
}

export default Hero;