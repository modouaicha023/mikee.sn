"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Moon,
  Sun,
  Menu,
  Layers3,
  LayoutDashboard,
  ListVideo,
  GanttChartSquare,
  Newspaper,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetFooter,
  SheetHeader,
} from "./ui/sheet";
import Image from "next/image";
import logo from "@/app/icon.png";
export default function Header() {
  const { theme, setTheme } = useTheme();

  const routes = [
    {
      href: "/catalogue",
      label: "Catalogue",
      Icon: Layers3,
    },
    {
      href: "/animes",
      label: "Animes",
      Icon: ListVideo,
    },
    {
      href: "/mangas",
      label: "Mangas",
      Icon: GanttChartSquare,
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      Icon: LayoutDashboard,
    },
    {
      href: "/blog",
      label: "Blog",
      Icon: Newspaper,
    },
  ];

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 lg:hidden lg:w-1050 w-6 hover:opacity-80" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] flex flex-col">
              <SheetHeader className="mt-2">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-5 mt-6">
                {routes.map((route, i) => (
                  <SheetFooter key={`sheetNavbarItem ${i}`}>
                    <SheetClose asChild>
                      <Button
                        asChild
                        variant="outline"
                        key={`rightNavbarItem ${i}`}>
                        <Link
                          href={route.href}
                          className="text-lg gap-2 w-full">
                          <route.Icon />
                          {route.label}
                        </Link>
                      </Button>
                    </SheetClose>
                  </SheetFooter>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="ml-4 lg:ml-0 px-2 flex items-center ">
            <h1 className="text-xl font-bo hidden  sm:block">
              <span className="text-blue-900 font-black ml-1 sm:text-6xl text-3xl bg-gradient-to-t from-fuchsia-500 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                Arise
              </span>
            </h1>
            <Image src={logo} alt="Sung Jin Woo" width={64} height={64} />
          </Link>
        </div>

        <nav className="mx-6  lg:space-x-4 hidden lg:w-1050 lg:block">
          {routes.map((route, i) => (
            <Button asChild variant="ghost" key={i}>
              <Link
                href={route.href}
                className="text-sm font-medium transition-colors flex gap-1">
                <route.Icon />
                {route.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="mr-2"
            aria-label="Toogle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-6 w-6 rotate-0 scale-100  transition-all dark:rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0  transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
