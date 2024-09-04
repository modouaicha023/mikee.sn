import { mangas } from "@/utils/data";
import Link from "next/link";
import soloLeveling from "@/public/images/solo-leveling.png";
import { notFound } from "next/navigation";
import Image from "next/image";
const MangaPage = async ({ params }: { params: { slug: string } }) => {
  const manga = mangas.find((manga) => manga.slug === params.slug);

  if (!manga) {
    notFound();
  }
  return (
    <div className="prose">
      <figure>
        <Image
          src={soloLeveling.src}
          alt={manga.name}
          layout="responsive"
          className="object-fill w-full"
          width={100}
          height={100}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{manga.name}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-secondary">{manga.status}</div>
          <div className="badge badge-outline">{manga.status}</div>
          <div className="badge badge-outline">{manga.chapters}</div>
        </div>
      </div>
    </div>
  );
};

export default MangaPage;
