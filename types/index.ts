import { IMangaChapter } from "@consumet/extensions";
import { StaticImageData } from "next/image";

export enum MangaStatus {
  ONGOING = "ongoing",
  UPCOMMING = "upcomming",
  COMPLETED = "completed	",
  PAUSED = "paused",
  CANCELLED = "cancelled",
  UNKNOWN = "unknown",
}
export interface Manga {
  mangaSlug: string;
  name: string;
  description: string;
  coverImage: string;
  status: MangaStatus;
  genres?: string[];
  chapters: Chapter[];
  lastChapter: string | null;
  year: string;
}

export interface Chapter {
  chapterSlug: string;
  title: string;
  releaseDate: string;
}
