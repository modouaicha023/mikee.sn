"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MangaCard } from "@/components/shared/manga-card";
import { Manga } from "@/@types";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState<Manga[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `/api/mangas/search?q=${encodeURIComponent(query || "")}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }
        const data = await response.json();
        setResults(data.results);
      } catch (err) {
        setError("An error occurred while fetching search results");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <section className="flex flex-wrap gap-2 px-6 py-2 justify-center sm:justify-normal h-fit mx-auto">
        {results.length === 0 ? (
          <p>No results found for "{query}"</p>
        ) : (
          results.map((manga) => <MangaCard key={manga.slug} manga={manga} />)
        )}
      </section>

      <aside className="border-l-2 border-base-content w-1/5 min-w-[300px] max-w-[400px] hidden sm:flex">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Search Results</h2>
          <p>Showing results for: "{query}"</p>
          <p>Total results: {results.length}</p>
        </div>
      </aside>
    </>
  );
}
