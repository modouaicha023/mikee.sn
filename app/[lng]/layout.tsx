import type { Metadata } from "next";
import { Coming_Soon } from "next/font/google";
import "./globals.css";
import { Header } from "../../components/shared/layout/header";
import { ThemeProvider } from "next-themes";
import { themes } from "@/constants/themes";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/google-analytics";
import Link from "next/link";
import Image from "next/image";
import swordTop from "@/public/images/sword.png";
import Footer from "@/components/shared/layout/footer";
import { dir } from "i18next";
import { languages, fallbackLng } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n";
const inter = Coming_Soon({
  weight: "400",
  subsets: ["latin"],
});
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

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
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string;
  };
}>) {
  return (
    <html
      lang={lng}
      dir={dir(lng)}
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
