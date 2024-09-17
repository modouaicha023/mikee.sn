import { NextResponse } from "next/server";
import { Genres, MANGA } from "@consumet/extensions";
import { Manga, MangaStatus } from "@/@types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page")) || 1;
  const query = searchParams.get("query") || "solo leveling";

  const mangaProvider = new MANGA.Mangasee123();
  try {
    const data = await mangaProvider.search(query, page);
    console.log(data);
    const mangas: Manga[] =
      data?.results?.map((manga: any) => ({
        slug: manga.id,
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
