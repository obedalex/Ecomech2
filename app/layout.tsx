import Header from "@/components/layout/header";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";
import { Geist, Exo_2 } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MotionProvider from "@/lib/motionProvider";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecomech Engineering",
  description: "An engineering site to recycle waste",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo2.variable}`} suppressHydrationWarning>
      <body
        className={`${exo2.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <Header />
            {children}
            <SpeedInsights />
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
