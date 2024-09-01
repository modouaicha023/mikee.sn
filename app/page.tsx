import { MangaCard, Manga } from "@/components/shared/manga-card";

const mangas: Manga[] = [
  {
    coverImage: "https://example.com/image1.jpg",
    name: "Attack on Titan",
    chapters: "139",
    status: "Finished",
  },
  {
    coverImage: "https://example.com/image2.jpg",
    name: "My Hero Academia",
    chapters: "390",
    status: "Ongoing",
  },
  {
    coverImage: "https://example.com/image3.jpg",
    name: "Chainsaw Man",
    chapters: "125",
    status: "Ongoing",
  },
  {
    coverImage: "https://example.com/image4.jpg",
    name: "One Piece",
    chapters: "1090",
    status: "Ongoing",
  },
  {
    coverImage: "https://example.com/image5.jpg",
    name: "Spy x Family",
    chapters: "81",
    status: "Ongoing",
  },
  {
    coverImage: "https://example.com/image6.jpg",
    name: "Jujutsu Kaisen",
    chapters: "232",
    status: "Ongoing",
  },
  {
    coverImage: "https://example.com/image7.jpg",
    name: "Solo Leveling",
    chapters: "179",
    status: "Finished",
  },
  {
    coverImage: "https://example.com/image8.jpg",
    name: "Demon Slayer",
    chapters: "205",
    status: "Finished",
  },
  {
    coverImage: "https://example.com/image9.jpg",
    name: "The Promised Neverland",
    chapters: "181",
    status: "Finished",
  },
  {
    coverImage: "https://example.com/image10.jpg",
    name: "Tokyo Revengers",
    chapters: "278",
    status: "Finished",
  },
];
export default function Home() {
  return (
    <>
      <section className="flex gap-6 p-4 flex-wrap">
        {mangas.map((manga, index) => (
          <MangaCard key={index} manga={manga} />
        ))}
      </section>
    </>
  );
}
