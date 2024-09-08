"use client";
import Image from "next/image";
import { ButtonImage } from "@/components/shared/button-image";
import { SearchInput } from "@/components/shared/search-input";
import ThemeSwitcher from "@/components/shared/theme-switcher";
import { User } from "@/components/shared/user";
import babyDragon from "@/public/images/baby-dragon.png";
import dragon from "@/public/images/dragon-head.png";
import Link from "next/link";
import fire from "@/components/svg/fire";
import GreenDragonIcon from "./svg/green-dragon";
import CatalogueIcon from "./svg/catalogue";
interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const user = { username: "modouaicha023", avatar: dragon.src };
  return (
    <>
      <nav className="navbar justify-between screen430:justify-normal gap-4">
        <div className="navbar-start">
          <Link href={"/"}>
            <Image
              src={babyDragon}
              alt="Baby Dragon"
              width={48}
              height={48}
              className="w-12 h-12 object-cover"
            />
          </Link>
        </div>
        <ul className="navbar-center gap-x-2">
          <li>
            <ButtonImage title="Popular" iconPosition="right" svg={fire()} />
          </li>
          <li>
            <SearchInput />
          </li>
          <li>
            <ButtonImage
              title="New"
              iconPosition="right"
              svg={GreenDragonIcon()}
            />
          </li>
          <li>
            <ButtonImage
              title="Genre"
              iconPosition="right"
              svg={CatalogueIcon()}
            />
          </li>
        </ul>
        <div className="navbar-end gap-x-2 w-fit">
          <ThemeSwitcher />
          <User user={user} />
        </div>
      </nav>
    </>
  );
};
