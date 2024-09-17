import { notFound } from "next/navigation";
import { IMangaChapterPage, MANGA } from "@consumet/extensions";
import { ChapterCard } from "@/components/shared/chapter-card";
import Link from "next/link";
import { Manga } from "@/@types";

const ChapterPage = async ({
  params,
}: {
  params: { mangaSlug: string; chapterSlug: string };
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const response = await fetch(`${baseUrl}/api/mangas/${params.mangaSlug}`);

  if (!response.ok) {
    notFound();
  }
  const data = await response.json();

  const manga: Manga = data.manga;
  const mangaName = manga.name;
  let chapterImages: { img: string; page: number }[] = [];

  const chapterIndex = manga.chapters?.findIndex(
    (chapter) => chapter.chapterSlug === params.chapterSlug
  );

  if (chapterIndex === undefined || chapterIndex === -1) {
    notFound();
  }

  const currentChapter = manga.chapters?.[chapterIndex];
  const nextChapter = manga.chapters?.[chapterIndex - 1];
  const prevChapter = manga.chapters?.[chapterIndex + 1];

  try {
    const response = await fetch(
      `${baseUrl}/api/mangas/${params.mangaSlug}/chapters/${params.chapterSlug}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch chapter images");
    }
    const data = await response.json();
    chapterImages = data.chapterImages;
  } catch (error) {
    console.error("Error fetching chapter images:", error);
    notFound();
  }

  return (
    <article className="flex items-center w-full p-4 flex-col h-fit">
      <h1 className="text-center text-primary">{mangaName as string}</h1>
      <div className="breadcrumbs text-sm whitespace-break-spaces ">
        <ul>
          <li>
            <Link href={"/"} className="underline">
              Home
            </Link>
          </li>
          <li>
            <Link
              href={`/mangas/${params.mangaSlug}`}
              className="underline text-primary"
            >
              {(mangaName as string).substring(0, 10)}
            </Link>
          </li>
          <li>Chapter {currentChapter?.chapterSlug as string}</li>
        </ul>
      </div>
      <div className="join grid grid-cols-2 mb-4  place-items-center">
        {prevChapter ? (
          <Link
            href={`/mangas/${params.mangaSlug}/chapters/${prevChapter.chapterSlug}`}
            className="w-full"
          >
            <button className="join-item btn btn-outline">
              Previous chapter
            </button>
          </Link>
        ) : (
          <button className="join-item btn btn-outline" disabled>
            Previous chapter
          </button>
        )}
        {nextChapter ? (
          <Link
            href={`/mangas/${params.mangaSlug}/chapter/${nextChapter.chapterSlug}`}
            className="w-full"
          >
            <button className="join-item btn btn-outline w-full">
              Next chapter
            </button>
          </Link>
        ) : (
          <button className="join-item btn w-full btn-outline" disabled>
            Next chapter
          </button>
        )}
      </div>
      {chapterImages.map((chapterImage: { img: string; page: number }, index) => (
        <ChapterCard
          key={chapterImage.page}
          chapter={chapterImage}
          mangaName={mangaName as string}
        />
      ))}
      <div className="join grid grid-cols-2 mt-4 w-full">
        {prevChapter ? (
          <Link
            href={`/mangas/${params.mangaSlug}/chapter/${prevChapter.chapterSlug}`}
            className="w-full"
          >
            <button className="join-item btn w-full btn-outline">
              Previous chapter
            </button>
          </Link>
        ) : (
          <button className="join-item btn w-full btn-outline" disabled>
            Previous chapter
          </button>
        )}
        {nextChapter ? (
          <Link
            href={`/mangas/${params.mangaSlug}/chapter/${nextChapter.chapterSlug}`}
            className="w-full"
          >
            <button className="join-item btn w-full btn-outline">
              Next chapter
            </button>
          </Link>
        ) : (
          <button className="join-item btn w-full btn-outline" disabled>
            Next chapter
          </button>
        )}
      </div>
    </article>
  );
};

export default ChapterPage;
