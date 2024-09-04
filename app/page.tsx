import { MangaCard, Manga } from "@/components/shared/manga-card";
import { mangas } from "@/utils/data";

export default function HomePage() {
  return (
    <>
      <section className="flex gap-4 p-4 flex-wrap justify-center sm:justify-normal">
        {mangas.map((manga, index) => (
          <MangaCard key={index} manga={manga} />
        ))}
      </section>

      <aside className="border-l-2 border-base-content w-1/5 min-w-[300px] max-w-[400px] hidden sm:flex">
        aside
      </aside>
    </>
  );
}
