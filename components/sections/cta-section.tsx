import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

function ctaSection() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-linear-to-br from-green-600 to-emerald-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - CTA Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Ready to Transform Your Waste Into Sustainable Energy?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Partner with us to develop innovative waste-to-energy solutions
              tailored to your needs. Request a technical brief to learn how we
              can make your community greener.
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-green-600 dark:text-green-400 font-semibold shadow-md hover:shadow-lg transition-all"
              asChild
            >
              <a href="mailto:info@ecomechghana.com">Contact Us</a>
            </Button>
          </div>

          {/* Right - Contact Info */}
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70 mb-1">Email Us</p>
                  <a
                    href="mailto:info@ecomechghana.com"
                    className="text-white hover:text-green-200 transition-colors font-semibold"
                  >
                    info@ecomechghana.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70 mb-1">Call Us</p>
                  <a
                    href="tel:+233000000000"
                    className="text-white hover:text-green-200 transition-colors font-semibold"
                  >
                    +233 (0) 000 000 000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70 mb-1">Visit Us</p>
                  <p className="text-white font-semibold">
                    {" "}
                    Ecomech Engineering Ltd <br />
                    20 Nii Tettey Kodjo II Road, GG-451-2525 <br />
                    Ayawaso Ga North, Accra G
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ctaSection;
