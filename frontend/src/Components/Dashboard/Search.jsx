import React from "react";

function Search() {
  return (
    <div className="w-full h-[10%] flex p-4 justify-center items-center">
      <form className="border w-full flex transition-all items-center shadow-xl border-[var(--purple--)] p-3 rounded-full hover:border-b-8">
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
          class="w-5 h-5 text-gray-700"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            stroke-width="1.333"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        {/* Input field */}
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for any topic"
          className=" outline-none w-full"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </form>
    </div>
  );
}

export default Search;
