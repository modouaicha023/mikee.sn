"use client";
import { Manga } from "@/@types";
import { MangaCard } from "@/components/shared/manga-card";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [mangaPage, setMangaPage] = useState(1);
  const [mangas, setMangas] = useState<Manga[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMangas = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/mangas?query=murim`);
        if (!response.ok) {
          throw new Error("Failed to fetch manga data");
        }
        const data = await response.json();
        if (Array.isArray(data.mangas)) {
          setMangas(data.mangas);
        } else {
          throw new Error("Invalid data format received from API");
        }
      } catch (err) {
        setError("An error occurred while fetching manga data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMangas();
  }, [mangaPage]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  if (mangas.length === 0) return <div>No mangas found</div>;

  return (
    <>
      <div className="flex flex-col gap-y-4 items-center justify-center py-2">
        <section className="flex flex-wrap gap-2 px-6 py-2 justify-center sm:justify-normal h-fit mx-auto">
          {mangas.map((manga) => (
            <MangaCard key={manga.mangaSlug} manga={manga} />
          ))}
        </section>
        {/* <div className="join">
          <button
            className="join-item btn"
            onClick={() => setMangaPage((prev) => Math.max(1, prev - 1))}
            disabled={mangaPage === 1}
          >
            «
          </button>
          <button className="join-item btn btn-accent">Page {mangaPage}</button>
          <button
            className="join-item btn"
            onClick={() => setMangaPage((prev) => prev + 1)}
          >
            »
          </button>
        </div> */}
      </div>

      <aside className="border-l-2 border-base-content w-1/5 min-w-[300px] max-w-[400px] hidden sm:flex">
        
      </aside>
    </>
  );
}
