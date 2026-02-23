import Header from "@/components/layout/header";
import Footer  from "@/components/sections/footer";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MotionProvider from "@/lib/motionProvider";
import "./globals.css";


const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${geistMono.variable} font-sans antialiased`}
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

