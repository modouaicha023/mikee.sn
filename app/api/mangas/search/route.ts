import { NextResponse } from "next/server";
import { MANGA } from "@consumet/extensions";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json(
      { error: "Missing search query" },
      { status: 400 }
    );
  }

  const manga = new MANGA.MangaDex();
  try {
    const data = await manga.search(query);
    const results =
      data?.results?.map((manga: any) => ({
        coverImage: manga.image,
        name: manga.title,
        lastChapter: manga.lastChapter,
        status: manga.status,
        slug: manga.id,
        year: manga.releaseDate,
        description: "",
      })) || [];

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Error fetching manga data:", error);
    return NextResponse.json(
      { error: "Failed to fetch manga data" },
      { status: 500 }
    );
  }
}
