import { mangas } from "@/utils/data";
import { notFound } from "next/navigation";
import Image from "next/image";
const MangaPage = async ({ params }: { params: { slug: string } }) => {
  const manga = mangas.find((manga) => manga.slug === params.slug);

  if (!manga) {
    notFound();
  }
  return (
    <article className="flex justify-center max-w-none w-full p-4 gap-2 flex-col md:flex-row h-fit">
      <figure className="flex relative h-[300px] md:h-[500px] md:w-[300px] w-full ">
        <Image
          src={
            typeof manga.coverImage === "object"
              ? manga.coverImage.src
              : manga.coverImage
          }
          fill
          alt={manga.name}
          className="object-contain aspect-auto rounded-md"
        />
      </figure>
      <div className="prose max-w-none flex flex-col gap-4 md:pl-10 justify-center">
        <h2 className="text-center">{manga.name}</h2>
        <div className="flex flex-wrap justify-center gap-2 md:justify-end">
          <span className="badge badge-secondary">{manga.status}</span>
          <span className="badge badge-outline whitespace-nowrap">
            Last chapter : {manga.chapters}
          </span>
          <span className="badge badge-outline">{manga.year}</span>
        </div>
        <p className="card-title w-full text-center md:max-w-sm md:text-justify">
          {manga.description}
        </p>
      </div>
    </article>
  );
};

export default MangaPage;
