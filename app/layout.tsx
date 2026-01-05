import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { MinimalNavbar } from "@/components/sections/MinimalNavbar";

const generalSans = localFont({
  src: [
    { path: './fonts/GeneralSans-Bold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/GeneralSans-Medium.woff2', weight: '500', style: 'normal' }
  ],
  variable: '--font-general-sans'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${generalSans.variable} font-sans antialiased transition-colors duration-500`}>
        <MinimalNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}