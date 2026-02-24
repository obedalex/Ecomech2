"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle"; // Import ThemeToggle
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#technology", label: "Technology" },
    { href: "#process", label: "Process" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo2.png"
              alt="Ecomech Engineering Logo"
              width={80}
              height={80}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl sm:text-2xl md:text-3xl tracking-tight text-foreground">
                ECOMECH
              </span>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                Engineering Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-underline text-sm text-muted-foreground hover:text-green-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle /> {/* Add theme toggle */}
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-medium"
              asChild
            >
              <a href="mailto:info@ecomechghana.com">Email us</a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.94 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 360, damping: 26 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: 0.18, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-flex"
                >
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  transition={{ duration: 0.18, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-flex"
                >
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-border bg-card/95 backdrop-blur-md origin-top"
            initial={{ height: 0, opacity: 0, y: -8 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
          >
            <nav className="flex flex-col gap-2 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-green-600 hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile Theme Toggle */}
              <div className="px-4 pt-2 pb-1">
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
