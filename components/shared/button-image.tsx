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
    <button className="btn-outline btn">
      {svg && iconPosition === "left" && <span>{svg}</span>}
      {title}
      {svg && iconPosition === "right" && <span>{svg}</span>}
    </button>
  );
};
