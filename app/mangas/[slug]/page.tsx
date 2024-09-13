import { notFound } from "next/navigation";
import Image from "next/image";
import { IMangaInfo, MANGA } from "@consumet/extensions";
import { Manga } from "@/@types";
import Link from "next/link";

const getTitle = (
  title: string | [lang: string][] | { [lang: string]: string }
) => {
  if (typeof title === "string") {
    return title;
  }
  if (Array.isArray(title)) {
    return title[0] || "Untitled";
  }
  if (typeof title === "object") {
    return title.en || Object.values(title)[0] || "Untitled";
  }
  return "Untitled";
};

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
    <article className=" flex flex-col gap-4 items-center p-4">
      <div className="flex justify-center max-w-none w-full p-4 gap-2 flex-col md:flex-row h-fit">
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
                href={`/mangas/${manga.slug}/${
                  manga.chapters[manga.chapters.length - 1].id
                }`}
              >
                <button className="btn btn-primary">
                  Chapter{" "}
                  {manga.chapters[manga.chapters.length - 1]?.chapterNumber}
                </button>
              </Link>
            )}
            {manga.chapters && (
              <Link href={`/mangas/${manga.slug}/${manga.chapters[0].id}`}>
                <button className="btn btn-primary">
                  Chapter {manga.chapters[0].chapterNumber}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-2 w-48 h-96 overflow-auto">
        {manga.chapters?.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/mangas/${manga.slug}/${chapter.id}`}
            className="flex gap-2"
          >
            <button className="btn btn-primary">
              <h2>{chapter.title}</h2>: Chapter {chapter.chapterNumber}
            </button>
          </Link>
        ))}
      </ul>
    </article>
  );
};

export default MangaPage;
