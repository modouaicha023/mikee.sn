"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState, useRef } from "react";

interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = ({}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null); // Create a ref for the input

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    document.getElementById("my_modal_7")?.click();
    if (searchQuery.trim().toLowerCase()) {
      router.push(`/mangas/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.ctrlKey && (event.key === "k" || event.key === "K")) {
        event.preventDefault();
        document.getElementById("my_modal_7")?.click();
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
    };

    window.addEventListener("keydown", keyDownHandler);
    return () => window.removeEventListener("keydown", keyDownHandler);
  }, []);

  useEffect(() => {
    const checkbox = document.getElementById("my_modal_7") as HTMLInputElement;
    const modalHandler = () => {
      if (checkbox.checked) {
        inputRef.current?.focus();
      }
    };

    checkbox.addEventListener("change", modalHandler);

    return () => {
      checkbox.removeEventListener("change", modalHandler);
    };
  }, []);

  return (
    <>
      <label
        className="input input-bordered hidden screen430:flex items-center gap-2 btn"
        htmlFor="my_modal_7"
      >
        <span className=" screen810:w-80 text-start">Search</span>
        <kbd className="kbd text-base-content hidden screen670:block">⌘</kbd>
        <kbd className="kbd text-base-content hidden screen670:block">K</kbd>
      </label>
      <>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <form onSubmit={handleSearch} className="card-body p-0 pb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Search</span>
                </label>
                <input
                  type="search"
                  ref={inputRef} // Attach the ref to the input element
                  placeholder="Research a manga"
                  className="input input-bordered"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="btn btn-primary mt-4">
                  Search
                </button>
              </div>
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
      </>
    </>
  );
};
