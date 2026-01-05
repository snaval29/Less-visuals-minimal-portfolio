import type { Metadata } from "next";
import "@/app/globals.css";
import { MinimalNavbar } from "@/components/sections/MinimalNavbar";
import { MinimalCursor } from "@/components/sections/MinimalCursor";

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
    /* We add "suppressHydrationWarning" to prevent 
       browser extensions from causing a font-flicker 
    */
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased lg:cursor-none">
        <MinimalCursor />
        <MinimalNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}