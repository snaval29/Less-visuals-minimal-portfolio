import type { Metadata } from "next";
import { Outfit } from "next/font/google"; 
import "@/app/globals.css";
import { MinimalNavbar } from "@/components/sections/MinimalNavbar";
// ✅ Import Cursor
import { MinimalCursor } from "@/components/sections/MinimalCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naval Sharma | Product Designer",
  description: "Portfolio of Naval Sharma",
};

export default function MinimalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans bg-white text-neutral-900 selection:bg-black selection:text-white min-h-screen pt-16 cursor-none`}>
        {/* ✅ Add Cursor Here 
           Note: We added 'cursor-none' class above to hide the default arrow on desktop 
        */}
        <MinimalCursor />
        <MinimalNavbar />
        {children}
      </body>
    </html>
  );
}