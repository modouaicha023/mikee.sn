import type { Metadata } from "next";
import { Coming_Soon } from "next/font/google";
import "./globals.css";
import { Header } from "./../components/header";
import { ThemeProvider } from "next-themes";
import { themes } from "@/utils/themes";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/google-analytics";
import Link from "next/link";
import Image from "next/image";
import swordTop from "@/public/images/sword.png";
import Footer from "@/components/footer";
const inter = Coming_Soon({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galsen Mangas",
  description:
    "Senegalese platform for watching and reading animes, mangas and novels.",
  manifest: "/manifest.json",
  keywords: [
    "mangas",
    "comics",
    "galsen",
    "anime",
    "galsen mangas",
    "otaku",
    "galsen otaku",
  ],
  authors: [
    {
      name: "Modou Aicha Diop",
      url: "https://www.linkedin.com/in/modouaicha023/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      data-theme="light"
      className="scroll-smooth"
    >
      <GoogleAnalytics />
      <body className={inter.className}>
        <ThemeProvider themes={themes} disableTransitionOnChange>
          <Header />
          <main className="w-full min-h-screen flex" id="top">
            {children}
            <Link href="#top" className="fixed bottom-2 right-2 text-lg">
              <Image
                src={swordTop.src}
                width={48}
                height={48}
                quality={100}
                alt="Gem to top - Scroll back to top"
              />
            </Link>
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
