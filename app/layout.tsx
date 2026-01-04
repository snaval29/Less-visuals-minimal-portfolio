import type { Metadata } from "next";
import localFont from "next/font/local"; // Import local font utility
import "@/app/globals.css";
import { MinimalNavbar } from "@/components/sections/MinimalNavbar";
import { MinimalCursor } from "@/components/sections/MinimalCursor";

// Configure General Sans
const generalSans = localFont({
  src: [
    {
      path: "../../public/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-general-sans", // This creates a CSS variable
});

export const metadata: Metadata = {
  title: "Naval Sharma | Product Designer",
  description: "Portfolio of Naval Sharma",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Apply the font variable to the body */}
      <body className={`${generalSans.variable} font-sans bg-white text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white lg:cursor-none`}>
        <MinimalCursor />
        <MinimalNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}