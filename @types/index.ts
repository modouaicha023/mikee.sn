import { IMangaChapter } from "@consumet/extensions";
import { StaticImageData } from "next/image";

export enum MangaStatus {
  ONGOING = "ongoing",
  UPCOMMING = "upcomming",
  COMPLETED = "completed	",
  PAUSED = "paused",
  CANCELLED = "cancelled",
}
export interface Manga {
  slug: string;
  coverImage: StaticImageData | string;
  name: string;
  lastChapter?: string;
  chapters?: IMangaChapter[] | undefined;
  status: MangaStatus;
  description: string;
  year: string;
}
