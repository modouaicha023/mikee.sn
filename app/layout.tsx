import type { Metadata } from "next";
import { Coming_Soon } from "next/font/google";
import "./globals.css";
import { Header } from "./../components/header";
import { ThemeProvider } from "next-themes";
import { themes } from "@/utils/themes";
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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider themes={themes} enableSystem disableTransitionOnChange>
          <Header />
          <main className="container min-h-screen flex">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
