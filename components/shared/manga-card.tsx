import Image, { StaticImageData } from "next/image";
import Link from "next/link";
export enum MangaStatus {
  ONGOING = "Ongoing",
  UPCOMMING = "Upcomming",
  FINISHED = "Finished",
  PAUSED = "Paused",
}
export interface Manga {
  slug: string;
  coverImage: StaticImageData | string;
  name: string;
  chapters: string;
  status: MangaStatus;
  description: string;
  year: number;
}

interface MangaCardProps {
  manga: Manga;
}

export const MangaCard: React.FC<MangaCardProps> = ({ manga }) => {
  let statusColor = "badge-secondary";
  if (manga.status === MangaStatus.FINISHED) {
    statusColor = "badge-secondary";
  } else if (manga.status === MangaStatus.ONGOING) {
    statusColor = "badge-primary";
  } else if (manga.status === MangaStatus.PAUSED) {
    statusColor = "badge-ghost";
  } else if (manga.status === MangaStatus.UPCOMMING) {
    statusColor = "badge-info";
  }
  return (
    <Link
      href={"/mangas/" + manga.slug}
      className="flex flex-col border-2 border-base-content bg-base-100 w-[250px] h-[350px] sm:w-[200px] sm:h-[300px]"
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
        <h2 className="text-center">{manga.name}</h2>
        <div className="flex flex-wrap gap-1  justify-evenly">
          <div className={`badge  ${statusColor}`}>{manga.status}</div>
          <div className="badge badge-outline whitespace-nowrap">
            {manga.chapters}
          </div>
          <div className="badge badge-outline">{manga.year}</div>
        </div>
      </div>
    </Link>
  );
};
