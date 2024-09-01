import { Navbar } from "@/components/navbar";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="prose">
      <h1 className="my-2 text-center">Welcome⛩️</h1>
      <Navbar />
    </header>
  );
};
