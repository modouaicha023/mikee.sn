import { MANGA } from "@consumet/extensions";
import { Manga } from "@/@types";
import { MangaCard } from "@/components/shared/manga-card";

export default async function HomePage() {
  const manga = new MANGA.MangaDex();
  let mangas: Manga[] = [];

  try {
    const data = await manga.fetchPopular();
    mangas =
      data?.results?.map((manga: any) => ({
        coverImage: manga.image,
        name: manga.title,
        lastChapter: manga.lastChapter,
        status: manga.status,
        slug: manga.id,
        year: manga.releaseDate,
        description: "",
      })) || [];
  } catch (error) {
    console.error("Error fetching manga data:", error);
  }

  return (
    <>
      <section className="flex flex-wrap gap-2 px-6 py-2 justify-center sm:justify-normal h-fit mx-auto">
        {mangas.map((manga) => (
          <MangaCard key={manga.slug} manga={manga} />
        ))}
      </section>

      <aside className="border-l-2 border-base-content w-1/5 min-w-[300px] max-w-[400px] hidden sm:flex">
        aside
      </aside>
    </>
  );
}
