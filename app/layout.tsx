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
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-white text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white lg:cursor-none">
        <MinimalCursor />
        <MinimalNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}