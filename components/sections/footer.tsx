import Link from "next/link";
import ContactAction from "../ContactAction";
import Image from "next/image";

function Footer() {
  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#", useAction: true },
      { label: "Careers", href: "#", useAction: true },
      { label: "Contact", href: "#contact" },
    ],
    resources: [
      { label: "Technical Briefs", href: "#", useAction: true },
      { label: "Case Studies", href: "#", useAction: true },
      { label: "News & Updates", href: "#", useAction: true },
      { label: "FAQs", href: "#", useAction: true },
    ],
  };

  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-950 py-16 lg:py-20 border-t-4 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
               <Image
              src="/logo2.png"
              alt="Ecomech Engineering Logo"
              width={80}
              height={80}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 object-contain"
            />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-white">
                  ECOMECH
                </span>
                <span className="text-xs text-green-400 -mt-1">
                  Engineering Ltd
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Engineering tomorrow&apos;s sustainable green energy solutions
              through innovative waste-to-energy technology.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.useAction ? (
                    <ContactAction
                      message={`${link.label} page is coming soon. Stay tuned for updates!`}
                    >
                      <span className="text-sm text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </ContactAction>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-green-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.useAction ? (
                    <ContactAction
                      message={`${link.label} section is coming soon. Stay tuned for updates!`}
                    >
                      <span className="text-sm text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </ContactAction>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-green-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-green-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ecomech Engineering Ltd.
            Transforming Waste Into Green Energy.
          </p>
          <div className="flex items-center gap-6">
            <ContactAction message="Privacy Policy page is coming soon. Stay tuned for updates!">
              <span className="text-sm text-gray-400 hover:text-green-400 transition-colors cursor-pointer">
                Privacy Policy
              </span>
            </ContactAction>
            <ContactAction message="Terms of Service page is coming soon. Stay tuned for updates!">
              <span className="text-sm text-gray-400 hover:text-green-400 transition-colors cursor-pointer">
                Terms of Service
              </span>
            </ContactAction>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
