import soloLeveling from "@/public/images/solo-leveling.png";
import Image from "next/image";
import Link from "next/link";
export interface Manga {
  slug: string;
  coverImage: string;
  name: string;
  chapters: string; // to be updated after
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
      className="card border-2 border-base-content bg-base-100 w-60 h-80"
    >
      <figure>
        <Image
          src={soloLeveling.src}
          alt={manga.name}
          width={soloLeveling.width}
          height={soloLeveling.height}
          className="object-fill"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{manga.name}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-secondary">{manga.status}</div>
          <div className="badge badge-outline">{manga.status}</div>
          <div className="badge badge-outline">{manga.chapters}</div>
        </div>
      </div>
    </Link>
  );
};
