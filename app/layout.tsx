import type { Metadata } from "next";
import { Coming_Soon } from "next/font/google";
import "./globals.css";
import { Header } from "./../components/header";
import { ThemeProvider } from "next-themes";
import { themes } from "@/utils/themes";
import { Analytics } from "@vercel/analytics/react";

const inter = Coming_Soon({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galsen Mangas",
  description:
    "Senegalese platform for watching and reading animes, mangas and novels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider themes={themes} enableSystem disableTransitionOnChange>
          <Header />
          <main className="w-full min-h-screen flex">{children}</main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
