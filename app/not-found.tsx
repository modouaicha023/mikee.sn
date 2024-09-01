import Image from "next/image";
import Link from "next/link";
import zoro from "@/public/images/zoro_being_lost.jpg";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/zoro_being_lost.jpg')",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="font-bold text-lg text-center m-10">Page not found</h1>
      <Link href="/" className="btn w-fit">
        Back to home
      </Link>
    </div>
  );
}
