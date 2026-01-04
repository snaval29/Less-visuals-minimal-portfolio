import type { Metadata } from "next";
import "@/app/globals.css";
import { MinimalNavbar } from "@/components/sections/MinimalNavbar";
import { MinimalCursor } from "@/components/sections/MinimalCursor";

export const metadata: Metadata = {
  title: "Naval Sharma",
  description: "Portfolio of Naval Sharma",
  // This adds the logo to your browser tab
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-white text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white lg:cursor-none">
        <MinimalCursor />
        <MinimalNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}