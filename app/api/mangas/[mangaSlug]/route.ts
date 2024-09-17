import { NextResponse } from "next/server";
import { IMangaInfo, MANGA } from "@consumet/extensions";
import { Chapter, Manga, MangaStatus } from "@/@types";

export async function GET(
  request: Request,
  { params }: { params: { mangaSlug: string; chapterSlug: string } }
) {
  const mangaProvider = new MANGA.Mangasee123();
  try {
    let chapters: Chapter[] = [];
    const data: IMangaInfo = await mangaProvider.fetchMangaInfo(
      params.mangaSlug
    );

    if (data.chapters !== undefined) {
      chapters = data.chapters.map((chapter) => ({
        chapterSlug: chapter.id,
        title: chapter.title,
        releaseDate: chapter.releaseDate || "unknown",
      }));
    }

    const manga: Manga = {
      mangaSlug: data.id,
      name:
        typeof data.title === "string"
          ? data.title
          : Array.isArray(data.title)
          ? data.title[0][0]
          : data.title?.english || "Manga name not found",
      coverImage: data.image || "/public/images/solo-leveling.jpeg",
      lastChapter: (data.lastChapter as string) || null,
      status: data.status as unknown as MangaStatus,
      year: (data.releaseDate as string) || "unknown",
      description:
        typeof data.description === "string"
          ? data.description
          : Array.isArray(data.description)
          ? data.description[0][0]
          : data.description?.en || "",
      genres: data.genres,
      chapters,
    };

    return NextResponse.json({ manga });
  } catch (error) {
    console.error("Error fetching manga data:", error);
    return NextResponse.json(
      { error: "Failed to fetch manga data" },
      { status: 500 }
    );
  }
}
