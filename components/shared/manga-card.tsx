import Image, { StaticImageData } from "next/image";
import Link from "next/link";
export interface Manga {
  slug: string;
  coverImage: StaticImageData | string;
  name: string;
  chapters: string;
  status: "Ongoing" | "Upcomming" | "Finished" | "Paused"; // to be updated
  description: string;
  year: number;
}

interface MangaCardProps {
  manga: Manga;
}

export const MangaCard: React.FC<MangaCardProps> = ({ manga }) => {
  return (
    <Link
      href={"/mangas/" + manga.slug}
      className="card border-2 border-base-content bg-base-100 w-[250px] h-[400px]"
    >
      <figure className="w-full">
        <Image
          src={
            typeof manga.coverImage === "object"
              ? manga.coverImage.src
              : manga.coverImage
          }
          alt={manga.name}
          height={200}
          width={200}
          className="w-full h-full object-fill"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{manga.name}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-secondary">{manga.status}</div>
          <div className="badge badge-outline">{manga.chapters}</div>
          <div className="badge badge-outline">{manga.year}</div>
        </div>
      </div>
    </Link>
  );
};
