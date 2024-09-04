import { mangas } from "@/utils/data";
import { notFound } from "next/navigation";
import Image from "next/image";
const MangaPage = async ({ params }: { params: { slug: string } }) => {
  const manga = mangas.find((manga) => manga.slug === params.slug);

  if (!manga) {
    notFound();
  }
  return (
    <div className=" max-w-none w-full flex gap">
      <figure className="w-[400px] h-[500px]">
        <Image
          src={manga.coverImage}
          alt={manga.name}
          layout="responsive"
          className="object-fill "
          width={200}
          height={200}
        />
      </figure>
      <div className="prose card-body">
        <h2 className="card-title">{manga.name}</h2>
        <div className="card-actions justify-end">
          <spa className="badge badge-secondary">{manga.status}</span>
          <span className="badge badge-outline">
            Last chapter : {manga.chapters}
          </span>
          <span className="badge badge-outline">{manga.year}</span>
          <p className="card-title">{manga.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MangaPage;
