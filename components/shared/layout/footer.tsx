import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-base-200 text-base-content rounded px-4 py-8 gap-y-4 border-t-2 border-base-content">
      <nav className="flex gap-x-4 flex-wrap ">
        <Link href={"/"} className="link link-hover">
          home
        </Link>
        <Link href={"/animes"} className="link link-hover">
          animes
        </Link>
        <Link href={"/mangas"} className="link link-hover">
          mangas
        </Link>
        <Link href={"/novels"} className="link link-hover">
          novels
        </Link>
        <Link href={"/credits"} className="link link-hover">
          credits
        </Link>
        <Link href={"/docs"} className="link link-hover">
          documentation
        </Link>
      </nav>
      <div className="flex justify-center  sm:flex-row items-center gap-8 w-sm flex-col-reverse ">
        <aside className="flex gap-x-2 gap-y-2 flex-col sm:flex-row items-center text-center ">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            {" "}
            Copyright © {new Date().getFullYear()} - All right reserved by
            Galsen Mangas
          </p>
        </aside>
        <nav className="flex gap-x-2">
          <a href="https://github.com/modouaicha023/galsen-mangas">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
