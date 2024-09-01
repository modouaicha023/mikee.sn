import { Navbar } from "@/components/navbar";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="flex flex-col ">
      <div className="prose max-w-none w-full">
        <h1 className="text-center">Welcome⛩️</h1>
      </div>
      <Navbar />
    </header>
  );
};
