import { Manga, MangaStatus } from "@/@types";
import Image from "next/image";
import Link from "next/link";

export interface MangaCardProps {
  manga: Manga;
}

export const MangaCard: React.FC<MangaCardProps> = ({ manga }) => {
  let statusColor = "badge-accent";
  if (manga.status === MangaStatus.COMPLETED) {
    statusColor = "badge-secondary";
  } else if (manga.status === MangaStatus.ONGOING) {
    statusColor = "badge-primary";
  } else if (manga.status === MangaStatus.PAUSED) {
    statusColor = "badge-ghost";
  } else if (manga.status === MangaStatus.UPCOMMING) {
    statusColor = "badge-info";
  } else if (manga.status === MangaStatus.CANCELLED) {
    statusColor = "badge-warning";
  }
  return (
    <Link
      href={"/mangas/" + manga.slug}
      className="flex flex-col border-2 border-base-content bg-base-100 w-[250px] h-[300px] sm:w-[300px] sm:h-[350px]"
    >
      <figure className="h-60 relative flex-grow">
        <Image
          src={
            typeof manga.coverImage === "object"
              ? manga.coverImage.src
              : manga.coverImage
          }
          alt={manga.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          className="object-fill aspect-auto"
        />
      </figure>
      <div className="flex flex-col p-4">
        <h2 className="text-center text-ellipsis sm:line-clamp-1">{manga.name}</h2>
        <div className="flex flex-wrap gap-1 justify-evenly">
          {manga.status && (
            <div className={`badge  ${statusColor}`}>{manga.status}</div>
          )}
          {manga.lastChapter && (
            <div className="badge badge-outline whitespace-nowrap">
              {manga?.lastChapter}
            </div>
          )}
          {manga.year && (
            <div className="badge badge-outline">{manga.year}</div>
          )}
        </div>
      </div>
    </Link>
  );
};
