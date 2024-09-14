"use client";
import { MANGA } from "@consumet/extensions";
import { Manga } from "@/@types";
import { MangaCard } from "@/components/shared/manga-card";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [mangaPage, setMangaPage] = useState(1);
  const [mangas, setMangas] = useState<Manga[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `/api/mangas?page=${encodeURIComponent(mangaPage || "1")}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }
        const data = await response.json();
        setMangas(data.results);
      } catch (err) {
        setError("An error occurred while fetching search results");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (mangaPage) {
      fetchResults();
    }
  }, [mangaPage]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  if (Array.isArray(mangas) && mangas.length <= 0)
    return <div>No mangas found</div>;
  console.log(mangas);
  return (
    <>
      <div className="flex flex-col gap-y-4 items-center justify-center py-2">
        <section className="flex flex-wrap gap-2 px-6 py-2 justify-center sm:justify-normal h-fit mx-auto">
          {Array.isArray(mangas) &&
            mangas.map((manga) => <MangaCard key={manga.slug} manga={manga} />)}
        </section>
        {Array.isArray(mangas) && mangas.length > 0 && (
          <div className="join">
            <button
              className="join-item btn"
              onClick={() => setMangaPage(mangaPage - 1)}
            >
              «
            </button>
            <button className="join-item btn">Page {mangaPage}</button>
            <button
              className="join-item btn"
              onClick={() => setMangaPage(mangaPage + 1)}
            >
              »
            </button>
          </div>
        )}
      </div>

      <aside className="border-l-2 border-base-content w-1/5 min-w-[300px] max-w-[400px] hidden sm:flex">
        aside
      </aside>
    </>
  );
}
