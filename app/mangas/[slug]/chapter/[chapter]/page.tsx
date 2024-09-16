import { notFound } from "next/navigation";
import { IMangaChapterPage, MANGA } from "@consumet/extensions";
import { ChapterCard } from "@/components/shared/chapter-card";
import Link from "next/link";

const ChapterPage = async ({
  params,
}: {
  params: { slug: string; chapter: string };
}) => {
  const mangadex = new MANGA.MangaDex();
  const mangaInfo = await mangadex.fetchMangaInfo(params.slug);
  const mangaName = mangaInfo.title;
  let chapterImages: IMangaChapterPage[] = [];

  const chapterIndex = mangaInfo.chapters?.findIndex(
    (chapter) => chapter.id === params.chapter
  );
  // If the chapter is not found, return a 404 page
  if (chapterIndex === undefined || chapterIndex === -1) {
    notFound();
  }

  const currentChapter = mangaInfo.chapters?.[chapterIndex];
  const nextChapter = mangaInfo.chapters?.[chapterIndex - 1];
  const prevChapter = mangaInfo.chapters?.[chapterIndex + 1];

  try {
    chapterImages = await mangadex.fetchChapterPages(params.chapter);
  } catch (error) {
    console.error("Error fetching manga data:", error);
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
              href={`/mangas/${params.slug}`}
              className="underline text-primary"
            >
              {(mangaName as string).substring(0, 10)}
            </Link>
          </li>
          <li>Chapter {currentChapter?.chapterNumber as string}</li>
        </ul>
      </div>
      <div className="join grid grid-cols-2 mb-4  place-items-center">
        {prevChapter ? (
          <Link
            href={`/mangas/${params.slug}/chapter/${prevChapter.id}`}
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
            href={`/mangas/${params.slug}/chapter/${nextChapter.id}`}
            className="w-full"
          >
            <button className="join-item btn btn-outline w-full">Next chapter</button>
          </Link>
        ) : (
          <button className="join-item btn w-full btn-outline" disabled>
            Next chapter
          </button>
        )}
      </div>
      {chapterImages.map((chapterImage: { img: string; page: number }) => (
        <ChapterCard
          key={chapterImage.page}
          chapter={chapterImage}
          mangaName={mangaName as string}
        />
      ))}
      <div className="join grid grid-cols-2 mt-4 w-full">
        {prevChapter ? (
          <Link
            href={`/mangas/${params.slug}/chapter/${prevChapter.id}`}
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
            href={`/mangas/${params.slug}/chapter/${nextChapter.id}`}
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
