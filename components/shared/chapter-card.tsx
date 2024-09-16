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
  const [aspectRatio, setAspectRatio] = useState(1);

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.target as HTMLImageElement;
    setAspectRatio(img.naturalWidth / img.naturalHeight);
  };

  return (
    <figure className="relative w-full md:max-w-[800px]">
      <div style={{ paddingTop: `${100 / aspectRatio}%` }} className="relative">
        <Image
          src={chapter?.img}
          unoptimized
          fill
          quality={100}
          priority
          alt={`${mangaName} - Page ${chapter.page} Galsens Mangas Senegal`}
          className="object-contain"
          onLoad={handleImageLoad}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 70vw"
        />
      </div>
    </figure>
  );
};
