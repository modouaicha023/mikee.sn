import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/zoro_being_lost.jpg')",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <h1 className="font-bold text-lg text-center m-10">{"Page not found 👈(ﾟヮﾟ👈)"}</h1>
      <Link href="/" className="btn w-fit">
        Back to home
      </Link>
    </div>
  );
}
