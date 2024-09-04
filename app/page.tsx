import { MangaCard, Manga } from "@/components/shared/manga-card";
import { mangas } from "@/utils/data";

export default function HomePage() {
  return (
    <>
      <section className="flex gap-6 p-4 flex-wrap">
        {mangas.map((manga, index) => (
          <MangaCard key={index} manga={manga} />
        ))}
      </section>
      <section className="border-l-2 border-base-content w-1/5 min-w-[300px]">r</section>
    </>
  );
}
