import { notFound } from "next/navigation";
import Image from "next/image";
import { IMangaChapterPage, MANGA } from "@consumet/extensions";
import { Manga } from "@/@types";
import { ChapterCard } from "@/components/shared/chapter-card";

const ChapterPage = async ({
  params,
}: {
  params: { slug: string; chapter: string };
}) => {
  const mangadex = new MANGA.MangaDex();
  const mangaName = (await mangadex.fetchMangaInfo(params.slug)).title;

  let chapterImages: IMangaChapterPage[] = [];

  try {
    chapterImages = await mangadex.fetchChapterPages(params.chapter);
    // console.log(chapterImages);
  } catch (error) {
    console.error("Error fetching manga data:", error);
    notFound();
  }

  return (
    <article className="flex items-center w-full p-4 flex-col h-fit">
      {chapterImages.map((chapterImage: { img: string; page: number }) => (
        <ChapterCard
          key={chapterImage.page}
          chapter={chapterImage}
          mangaName={mangaName as string}
        />
      ))}
      {/* <div className="prose max-w-none flex flex-col gap-4 md:pl-10 justify-center">
        <h2 className="text-center">{manga.name}</h2>
        <div className="flex flex-wrap justify-center gap-2 md:justify-end">
          <span className="badge badge-secondary">{manga.status}</span>
          <span className="badge badge-outline whitespace-nowrap">
            Last chapter: {manga.chapters}
          </span>
          <span className="badge badge-outline">{manga.year}</span>
        </div>
        <p className=" w-full text-wrap text-center md:max-w-sm md:text-justify">
          {manga.description}
        </p>
      </div> */}
    </article>
  );
};

export default ChapterPage;
