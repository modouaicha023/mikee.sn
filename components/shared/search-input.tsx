"use client";

import { useEffect, useState } from "react";

interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = ({}) => {
  // const [openSearch, setOpenSearch] = useState(false);
  // const keyDownHandler = (event: KeyboardEvent) => {
  //   if (event.ctrlKey && (event.key === "k" || event.key === "K")) {
  //     event.preventDefault();
  //     setOpenSearch(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("keydown", keyDownHandler);
  // }, []);
  // console.log(openSearch);
  return (
    <>
      <label
        className="input input-bordered hidden screen430:flex items-center gap-2 btn"
        htmlFor="my_modal_7"
      >
        <span
          className=" screen810:w-80 text-start"
          // onClick={() => setOpenSearch(true)}
        >
          Search
        </span>
        <kbd className="kbd text-base-content hidden screen670:block">⌘</kbd>
        <kbd className="kbd text-base-content hidden screen670:block">K</kbd>
      </label>
      <>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Search</span>
                </label>
                <input
                  type="search"
                  placeholder="Research a manga, anime, or novel"
                  className="input input-bordered"
                  required
                />
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
