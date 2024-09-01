import soloLeveling from "@/public/images/solo-leveling.png";
export interface Manga {
  coverImage: string;
  name: string;
  chapters: string; // to be updated after
  status: "Ongoing" | "Upcomming" | "Finished" | "Paused"; // to be updated
}

interface MangaCardProps {
  manga: Manga;
}

export const MangaCard: React.FC<MangaCardProps> = ({ manga }) => {
  return (
    <div className="card border-2 border-base-content bg-base-100 w-96">
      <figure>
        <img src={soloLeveling.src} alt={manga.name} className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {manga.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{manga.status}</div>
          <div className="badge badge-outline">{manga.chapters}</div>
        </div>
      </div>
    </div>
  );
};
