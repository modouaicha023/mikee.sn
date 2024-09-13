import { Manga, MangaStatus } from "@/@types";
import { IMangaChapterPage } from "@consumet/extensions";
import Image from "next/image";
import Link from "next/link";

interface MangaCardProps {
  chapter: IMangaChapterPage;
  mangaName: string;
}

export const ChapterCard: React.FC<MangaCardProps> = ({
  chapter,
  mangaName,
}) => {
  return (
    <figure className="relative w-[70vw] h-fit">
      <Image
        src={chapter?.img}
        width={600}
        height={600}
        quality={100}
        alt={mangaName + "- Page " + chapter.page}
        className="object-contain aspect-auto w-full h-full"
      />
    </figure>
  );
};
