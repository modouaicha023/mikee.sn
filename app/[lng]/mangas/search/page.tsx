"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MangaCard } from "@/components/shared/manga-card";
import { Manga } from "@/types";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState<Manga[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setResults(null);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `/api/mangas/search?q=${encodeURIComponent(query)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }
        const data = await response.json();
        setResults(data.results || []);
      } catch (err) {
        setError("An error occurred while fetching search results");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen w-screen">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      );
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!query) {
      return <p>Please enter a search query.</p>;
    }

    if (!results || results.length === 0) {
      return <p>No results found for &quot;{query}&quot;</p>;
    }

    return results.map((manga) => (
      <MangaCard key={manga.mangaSlug} manga={manga} />
    ));
  };

  return (
    <>
      <section className="flex flex-wrap gap-2 px-6 py-2 justify-center sm:justify-normal h-fit mx-auto">
        {renderContent()}
      </section>

      <aside className="border-l-2 border-base-content w-1/5 min-w-[300px] max-w-[400px] hidden sm:flex">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Search Results</h2>
          <p>Showing results for: &quot;{query || "No query"}&quot;</p>
          <p>Total results: {results ? results.length : 0}</p>
        </div>
      </aside>
    </>
  );
}
