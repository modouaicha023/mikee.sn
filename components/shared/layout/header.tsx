import { Navbar } from "@/components/shared/layout/navbar";
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="flex flex-col border-b-2 border-base-content ">
      <div className="prose max-w-none w-full pt-4">
        <h1 className="text-center">Welcome⛩️</h1>
      </div>
      <Navbar />
    </header>
  );
};
