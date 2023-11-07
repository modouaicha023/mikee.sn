import Link from "next/link";
import MenuItem from "./MenuItem";
import { Home, Info } from "lucide-react";
export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex ">
        <MenuItem title="HOME" address="/" Icon={Home} />
        <MenuItem title="ABOUT" address="/about" Icon={Info} />
      </div>
      <div>
        <Link href={"/"}>
          <h2 className="text-3xl ">
            <span className="font-bold text-black bg-amber-400 py-1 px-2 rounded-lg mr-1">
              Mikee
            </span>
            <span className="text-xl hidden sm:inline mr-4">SN</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
