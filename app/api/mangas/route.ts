import { NextResponse } from "next/server";
import { MANGA } from "@consumet/extensions";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page"));

  if (!page) {
    return NextResponse.json({ error: "Missing page number" }, { status: 400 });
  }

  const mangaProvider = new MANGA.MangaDex();
  try {
    const data = await mangaProvider.fetchPopular(page);
    const mangas =
      data?.results?.map((manga: any) => ({
        coverImage: manga.image,
        name: manga.title,
        lastChapter: manga.lastChapter,
        status: manga.status,
        slug: manga.id,
        year: manga.releaseDate,
        description: "",
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
