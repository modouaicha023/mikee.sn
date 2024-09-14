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
  let chapterInfo = mangaInfo.chapters?.find(
    (chapter) => chapter.id === params.chapter
  );

  let chapterImages: IMangaChapterPage[] = [];

  try {
    chapterImages = await mangadex.fetchChapterPages(params.chapter);
  } catch (error) {
    console.error("Error fetching manga data:", error);
    notFound();
  }

  return (
    <article className="flex items-center w-full p-4 flex-col h-fit">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={`/mangas/${params.slug}`}>{mangaName as string}</Link>
          </li>
          <li>Chapter {chapterInfo?.chapterNumber as string}</li>
        </ul>
      </div>
      {chapterImages.map((chapterImage: { img: string; page: number }) => (
        <ChapterCard
          key={chapterImage.page}
          chapter={chapterImage}
          mangaName={mangaName as string}
        />
      ))}
    </article>
  );
};

export default ChapterPage;
