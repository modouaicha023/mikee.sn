import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
interface Props {
  title: string;
  address: string;
  Icon: LucideIcon;
}

export default function MenuItem({ title, address, Icon }: Props) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6">
        <div className="sm:hidden hover:bg-amber-500 mx-4 p-1 rounded-2xl w-fit">
          <Icon size={"32px"} color="white" />
        </div>
        <Button variant={"outline"} className="hidden sm:inline">
          {title}
        </Button>
      </Link>
    </div>
  );
}
