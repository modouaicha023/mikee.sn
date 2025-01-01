import { NextResponse } from "next/server";
import { MANGA } from "@consumet/extensions";
import { Manga, MangaStatus } from "@/@types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page")) || 1;
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json(
      { error: "Missing search query" },
      { status: 400 }
    );
  }

  const mangaProvider = new MANGA.MangaDex();
  try {
    const data = await mangaProvider.search(query);
    const mangas: Manga[] =
      data?.results?.map((manga: any) => ({
        mangaSlug: manga.id,
        name: manga.title,
        coverImage: manga.image,
        lastChapter: "",
        status: MangaStatus.UNKNOWN,
        year: "",
        description: "",
        genres: [],
        chapters: [],
      })) || [];

    return NextResponse.json({ mangas });
  } catch (error) {
    console.error("Error fetching manga data:", error);
    return NextResponse.json(
      { error: "Failed to fetch manga data" },
      { status: 500 }
    );
  }
}
