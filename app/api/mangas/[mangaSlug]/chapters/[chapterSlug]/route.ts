import { NextResponse } from "next/server";
import { MANGA } from "@consumet/extensions";

export async function GET(
  request: Request,
  { params }: { params: { mangaSlug: string; chapterSlug: string } }
) {
  const mangaProvider = new MANGA.Mangasee123();
  try {
    const chapterImages = await mangaProvider.fetchChapterPages(params.chapterSlug);
    return NextResponse.json({ chapterImages });
  } catch (error) {
    console.error("Error fetching chapter images:", error);
    return NextResponse.json(
      { error: "Failed to fetch chapter images" },
      { status: 500 }
    );
  }
}