import type { Metadata } from "next";
import localFont from "next/font/local"; // Use localFont for General Sans
import "@/app/globals.css";
import { MinimalNavbar } from "@/components/sections/MinimalNavbar";
import { MinimalCursor } from "@/components/sections/MinimalCursor";

// Load General Sans locally or via CDN. Local is more stable for mobile.
const generalSans = localFont({
  src: [
    {
      path: '../public/fonts/GeneralSans-Bold.woff2', // Ensure you have these files
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeneralSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    }
  ],
  variable: '--font-general-sans'
});

export const metadata: Metadata = {
  title: "Naval Sharma | Product Designer",
  description: "Portfolio of Naval Sharma",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${generalSans.variable} font-sans antialiased lg:cursor-none`}>
        <MinimalCursor />
        <MinimalNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}