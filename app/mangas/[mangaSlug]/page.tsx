import { notFound } from "next/navigation";
import Image from "next/image";
import { Manga } from "@/@types";
import Link from "next/link";

const MangaPage = async ({ params }: { params: { mangaSlug: string } }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const response = await fetch(`${baseUrl}/api/mangas/${params.mangaSlug}`);

  if (!response.ok) {
    notFound();
  }
  const data = await response.json();

  const manga: Manga = data.manga;

  if (!manga) {
    return <div>404</div>;
  }

  return (
    <article className="overflow-hidden flex flex-col gap-4 items-center w-full justify-center p-4">
      <div className="flex justify-center items-start max-w-none w-full p-4 gap-2 flex-col md:flex-row h-fit">
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
          <h1 className="text-center text-xl md:text-2xl m-0 md:text-start">
            {manga.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {manga.status && (
              <span className="badge badge-secondary">{manga.status}</span>
            )}
            {manga.year && manga.year !== "unknown" && (
              <span className="badge badge-info">Year: {manga.year}</span>
            )}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start items-center h-fit max-w-[300px]">
            {manga.genres && manga.genres?.length > 0 && (
              <h2 className="h-fit m-0">Genre: </h2>
            )}
            {manga.genres?.map((genre) => (
              <span className="badge badge-outline" key={genre}>
                {genre}
              </span>
            ))}
          </div>
          <p className="w-full break-all md:max-w-md md:text-justify text-balance text-sm md:text-lg p-4 m-0 max-h-[200px] overflow-auto">
            {manga.description}
          </p>
          <div className="flex gap-4 justify-center items-center">
            {manga.chapters?.length > 0 && (
              <Link
                href={`/mangas/${manga.mangaSlug}/chapter/${
                  manga.chapters[manga.chapters.length - 1]?.chapterSlug
                }`}
                className="no-underline"
              >
                <button className="btn btn-primary">
                  <span>First chapter</span>
                </button>
              </Link>
            )}
            {manga.chapters && (
              <Link
                href={`/mangas/${manga.mangaSlug}/chapter/${manga.chapters[0]?.chapterSlug}`}
                className="no-underline"
              >
                <button className="btn btn-primary">
                  <span>Last chapter</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto h-96">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Chapter</th>
              <th>Title</th>
              <th>Publication Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {manga.chapters
              ?.slice()
              .reverse()
              .map((chapter, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{chapter.title || `Chapter ${index + 1}`}</td>
                  <td>{chapter.releaseDate || "unknown"}</td>
                  <td>
                    <Link
                      href={`/mangas/${manga.mangaSlug}/chapter/${chapter.chapterSlug}`}
                      className="underline"
                    >
                      Read
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Chapter</th>
              <th>Title</th>
              <th>Publication Date</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </article>
  );
};

export default MangaPage;
