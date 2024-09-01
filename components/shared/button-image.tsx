import Link from "next/link";
import { ReactNode } from "react";

interface ButtonImageProps {
  title: string;
  iconPosition: "left" | "right";
  svg?: ReactNode;
}

export const ButtonImage: React.FC<ButtonImageProps> = ({
  title,
  iconPosition,
  svg,
}) => {
  return (
    <Link
      href={"/mgg"}
      className="btn btn-outline text-xs hidden screen1150:flex items-center justify-center whitespace-nowrap"
    >
      {svg && iconPosition === "left" && <span className="">{svg}</span>}
      <span>{title}</span>
      {svg && iconPosition === "right" && <span className="">{svg}</span>}
    </Link>
  );
};
