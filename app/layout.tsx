import "@/app/globals.css";
import localFont from "next/font/local";
import Script from "next/script";
import { MinimalNavbar } from "@/components/sections/MinimalNavbar";

const generalSans = localFont({
  src: [
    { path: "./fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/GeneralSans-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/GeneralSans-MediumItalic.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-general-sans", // 👈 This MUST match the CSS variable used in globals.css
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* Apply both the variable and the className to the root */
    <html 
      lang="en" 
      className={`${generalSans.variable} ${generalSans.className} scroll-smooth`} 
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function () {
            try {
              const theme = localStorage.getItem("theme");
              document.documentElement.classList.toggle("dark", theme === "dark");
            } catch (_) {}
          })();
        `}</Script>
      </head>

      {/* Added font-sans to the body to enforce the theme-level font */}
      <body className="antialiased font-sans transition-colors duration-500">
        <MinimalNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}