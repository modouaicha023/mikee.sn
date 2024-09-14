"use client";
import { IMangaChapterPage } from "@consumet/extensions";
import Image from "next/image";
import { useState } from "react";

interface ChapterCardProps {
  chapter: IMangaChapterPage;
  mangaName: string;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({
  chapter,
  mangaName,
}) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  return (
    <figure className="relative w-full md:max-w-[800px] h-auto">
      <Image
        src={chapter?.img}
        width={imageSize.width}
        height={imageSize.height}
        quality={100}
        priority
        alt={`${mangaName} - Page ${chapter.page} Galsens Mangas Senegal`}
        className="object-contain w-full h-auto"
        onLoadingComplete={({ naturalWidth, naturalHeight }) =>
          setImageSize({ width: naturalWidth, height: naturalHeight })
        }
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 70vw"
      />
    </figure>
  );
};
