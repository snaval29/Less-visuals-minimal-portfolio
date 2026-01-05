import "@/app/globals.css";
import localFont from "next/font/local";
import Script from "next/script";
import { MinimalNavbar } from "@/components/sections/MinimalNavbar";

const generalSans = localFont({
  src: [
    { path: "./fonts/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={generalSans.className}
      suppressHydrationWarning
      style={{
        backgroundColor: "#ffffff",
        colorScheme: "light",
      }}
    >
      <head>
        {/* 🔒 THEME LOCK — RUNS BEFORE ANY CSS */}
        <Script id="theme-lock" strategy="beforeInteractive">{`
          (function () {
            try {
              const theme = localStorage.getItem("theme");
              if (theme === "dark") {
                document.documentElement.classList.add("dark");
                document.documentElement.style.colorScheme = "dark";
              } else {
                document.documentElement.classList.remove("dark");
                document.documentElement.style.colorScheme = "light";
              }
            } catch (_) {}
          })();
        `}</Script>
      </head>

      <body className="antialiased transition-colors duration-500">
        <MinimalNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

