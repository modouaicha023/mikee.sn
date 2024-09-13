import { notFound } from "next/navigation";
import Image from "next/image";
import { IMangaInfo, MANGA } from "@consumet/extensions";
import { Manga } from "@/@types";
import Link from "next/link";

const MangaPage = async ({ params }: { params: { slug: string } }) => {
  const mangadex = new MANGA.MangaDex();
  let manga: Manga | null = null;

  try {
    const data: IMangaInfo = await mangadex.fetchMangaInfo(params.slug);
    // console.log(data);
    manga = {
      coverImage: data.image || "",
      name: data.title as any,
      lastChapter: data.chapters && data.chapters[0]?.title,
      status: data.status || ("Unknown" as any),
      slug: data.id,
      year: (data.releaseDate || "").toString(),
      description: "",
      chapters: data.chapters,
    };
  } catch (error) {
    console.error("Error fetching manga data:", error);
    notFound();
  }

  if (!manga) {
    notFound();
  }

  return (
    <article className=" flex flex-col gap-4 items-center w-full justify-center p-4">
      <div className="flex justify-center items-center max-w-none w-full p-4 gap-2 flex-col md:flex-row h-fit">
        <figure className="flex relative h-[300px] md:h-[500px] md:w-[300px] w-full">
          <Image
            src={manga.coverImage}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            alt={manga.name}
            className="object-contain aspect-auto rounded-md"
          />
        </figure>
        <div className="prose max-w-none flex flex-col gap-4 md:pl-10 justify-center">
          <h2 className="text-center">{manga.name}</h2>
          <div className="flex flex-wrap justify-center gap-2 md:justify-end">
            {manga.status && (
              <span className="badge badge-secondary">{manga.status}</span>
            )}
            {manga.lastChapter && (
              <span className="badge badge-outline whitespace-nowrap">
                Last chapter: {manga.lastChapter}
              </span>
            )}
            {manga.year && (
              <span className="badge badge-outline">{manga.year}</span>
            )}
          </div>
          <p className=" w-full text-wrap text-center md:max-w-sm md:text-justify">
            {manga.description}
          </p>
          <div className="flex gap-4">
            {manga.chapters && (
              <Link
                href={`/mangas/${manga.slug}/chapter/${
                  manga.chapters[manga.chapters.length - 1].id
                }`}
              >
                <button className="btn btn-primary">
                  Chapter{" "}
                  {
                    manga.chapters[manga.chapters.length - 1]
                      ?.chapterNumber as any
                  }
                </button>
              </Link>
            )}
            {manga.chapters && (
              <Link
                href={`/mangas/${manga.slug}/chapter/${manga.chapters[0].id}`}
              >
                <button className="btn btn-primary">
                  Chapter {manga.chapters[0].chapterNumber as any}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <ul className="flex flex-wrap w-full  items-center gap-2 overflow-auto max-w-3xl">
        {manga.chapters
          ?.slice(-20) // Crée une copie du tableau pour ne pas muter l'original
          .reverse() // Inverse l'ordre des éléments
          .map((chapter) => (
            <li key={chapter.id}>
              <Link
                href={`/mangas/${manga.slug}/chapter/${chapter.id}`}
                className="flex gap-2 "
              >
                <button className="btn btn-primary">
                  {chapter.chapterNumber !== undefined && (
                    <span> Chapter {chapter.chapterNumber as string}</span>
                  )}{" "}
                </button>
              </Link>
            </li>
          ))}
      </ul>
    </article>
  );
};

export default MangaPage;
