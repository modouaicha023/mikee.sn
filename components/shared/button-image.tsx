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
    <Link href={"#"} className="btn btn-outline text-xl">
      {svg && iconPosition === "left" && <span>{svg}</span>}
      {title}
      {svg && iconPosition === "right" && <span>{svg}</span>}
    </Link>
  );
};
