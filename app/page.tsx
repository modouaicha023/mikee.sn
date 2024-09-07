import { MangaCard, Manga } from "@/components/shared/manga-card";
import { mangas } from "@/utils/data";

export default function HomePage() {
  return (
    <>
      <section className="flex flex-wrap gap-2 px-6 py-2 justify-center sm:justify-normal h-fit mx-auto cente">
        {mangas.map((manga: Manga, index: number) => (
          <MangaCard key={index} manga={manga} />
        ))}
      </section>

      <aside className="border-l-2 border-base-content w-1/5 min-w-[300px] max-w-[400px] hidden sm:flex">
        aside
      </aside>
    </>
  );
}
