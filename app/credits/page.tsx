import Link from "next/link";
import React from "react";

export default function CreditPage() {
  // Array for Libraries & Frameworks
  const libraries = [
    {
      name: "React",
      url: "https://reactjs.org/",
      description: "Frontend library for building user interfaces.",
    },
    {
      name: "Next.js",
      url: "https://nextjs.org/",
      description: "Framework for server-side rendering and routing.",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
      description: "For static type-checking.",
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      description: "Utility-first CSS framework for styling.",
    },
    {
      name: "Daisy UI",
      url: "https://daisyui.com/",
      description:
        "Component library that functions as a plugin for TailwindCSS, a highly customizable and low-level CSS framework. ",
    },
  ];

  // Array for APIs & Data Providers
  const apis = [
    {
      name: "Consumet API",
      url: "https://consumet.org/",
      description: "For consuming various content APIs.",
    },
    // {
    //   name: "Mangasee123 API",
    //   url: "https://www.mangasee123.com/",
    //   description: "For providing manga data.",
    // },
    {
        name: "MangaDex API",
        url: "https://mangadex.org/",
        description: "For providing manga data.",
      },
  ];

  // Array for Images & Icons
  const imagesIcons = [
    {
      name: "Flaticon.com",
      url: "https://www.flaticon.com",
      description: "Free images and icons used in the project.",
    },
  ];

  // Array for Tools
  const tools = [
    {
      name: "Visual Studio Code",
      url: "https://code.visualstudio.com/",
      description: "Code editor.",
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      description: "Version control and repository hosting.",
    },
  ];

  return (
    <div
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
      className="prose"
    >
      <h1>Credits</h1>
      <p>
        This project wouldn't have been possible without the help of various
        open-source libraries, tools, and resources. We would like to
        acknowledge and give credit to the following:
      </p>

      <h2>Libraries & Frameworks</h2>
      <ul>
        {libraries.map((lib) => (
          <li key={lib.name}>
            <Link href={lib.url} target="_blank" rel="noopener noreferrer">
              {lib.name}
            </Link>{" "}
            - {lib.description}
          </li>
        ))}
      </ul>

      <h2>APIs & Data Providers</h2>
      <ul>
        {apis.map((api) => (
          <li key={api.name}>
            <Link href={api.url} target="_blank" rel="noopener noreferrer">
              {api.name}
            </Link>{" "}
            - {api.description}
          </li>
        ))}
      </ul>

      <h2>Images & Icons</h2>
      <ul>
        {imagesIcons.map((imgIcon) => (
          <li key={imgIcon.name}>
            <Link href={imgIcon.url} target="_blank" rel="noopener noreferrer">
              {imgIcon.name}
            </Link>{" "}
            - {imgIcon.description}
          </li>
        ))}
      </ul>

      <h2>Tools</h2>
      <ul>
        {tools.map((tool) => (
          <li key={tool.name}>
            <Link href={tool.url} target="_blank" rel="noopener noreferrer">
              {tool.name}
            </Link>{" "}
            - {tool.description}
          </li>
        ))}
      </ul>

      <p>
        Thank you to all the developers and contributors who made these
        resources available.
      </p>
    </div>
  );
}
