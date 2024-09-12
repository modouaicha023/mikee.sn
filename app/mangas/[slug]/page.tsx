import { notFound } from "next/navigation";
import Image from "next/image";
import { IMangaInfo, MANGA } from "@consumet/extensions";
import { Manga } from "@/components/shared/manga-card";

// Helper function to extract a single title from different types
const getTitle = (
  title: string | [lang: string][] | { [lang: string]: string }
) => {
  if (typeof title === "string") {
    return title;
  }
  if (Array.isArray(title)) {
    return title[0] || "Untitled"; // Assuming the first language is default
  }
  if (typeof title === "object") {
    return title.en || Object.values(title)[0] || "Untitled";
  }
  return "Untitled";
};

const MangaPage = async ({ params }: { params: { slug: string } }) => {
  const mangadex = new MANGA.MangaDex();
  let manga: Manga | null = null;

  try {
    // Fetch manga data using the provided slug
    const data: IMangaInfo = await mangadex.fetchMangaInfo(params.slug);

    // Map the fetched data to the Manga object structure
    manga = {
      coverImage: data.image || "", // fallback if no image
      name: data.title as any, // Use helper function to extract title
      chapters: typeof data.lastChapter === "string" ? data.lastChapter : "0", // fallback if not a string
      status: data.status || ("Unknown" as any), // Provide default if undefined
      slug: data.id,
      year: (data.releaseDate || "").toString(), // Coerce year to string
      description: getTitle(data.description as any), // Extract the description in a similar way
    };
  } catch (error) {
    console.error("Error fetching manga data:", error);
    notFound();
  }

  if (!manga) {
    notFound();
  }

  return (
    <article className="flex justify-center max-w-none w-full p-4 gap-2 flex-col md:flex-row h-fit">
      <figure className="flex relative h-[300px] md:h-[500px] md:w-[300px] w-full">
        <Image
          src={manga.coverImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          alt={manga.name}
          className="object-contain aspect-auto rounded-md"
        />
      </figure>
      <div className="prose max-w-none flex flex-col gap-4 md:pl-10 justify-center">
        <h2 className="text-center">{manga.name}</h2>
        <div className="flex flex-wrap justify-center gap-2 md:justify-end">
          <span className="badge badge-secondary">{manga.status}</span>
          <span className="badge badge-outline whitespace-nowrap">
            Last chapter: {manga.chapters}
          </span>
          <span className="badge badge-outline">{manga.year}</span>
        </div>
        <p className=" w-full text-wrap text-center md:max-w-sm md:text-justify">
          {manga.description}
        </p>
      </div>
    </article>
  );
};

export default MangaPage;
