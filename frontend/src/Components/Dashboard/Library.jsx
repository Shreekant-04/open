import React, { useState } from "react";

function Library() {
  const [Library, setLib] = useState([
    {
      title: "Untitled Quiz",
      type: "Quiz",
    },
    {
      title: "Untitled Quiz",
      type: "Quiz",
    },
  ]);
  return (
    <div className="p-5 w-full">
      <h1 className="font-bold text-xl">From your Library</h1>
      <p>Take a look at the material you recently created.</p>
      {Library.map((item, index) => {
        return (
          <div key={index} className="border-2 w-full h-[150px] rounded-2xl my-5 p-4 flex justify-center items-center">
            <div className="w-[75%] flex">
              <div className="bg-gray-300 w-[200px] rounded-lg h-[120px]"></div>
              <div className="mx-4 flex flex-col justify-start gap-2">
                <div className="flex items-center gap-4 text-sm">
                  <p>{item.type}</p>
                  <p className="w-[10px] h-[10px] rounded-full bg-gray-300"></p>
                  <p>10 Questions</p>
                </div>
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="text-sm text-gray-400">0 Session</p>
              </div>
            </div>
            <section className="flex flex-col items-end w-[50%] gap-2 h-full">
              <div className="flex gap-4 justify-end items-start  w-full h-full">
                <img className="w-[15px]" src="/edit.svg" alt="" />
                <img className="w-[15px]" src="/bin.svg" alt="" />
                <p className="text-sm">View</p>
              </div>
              <button className="border-[var(--pink--)] font-bold rounded-md text-[var(--pink--)] h-[45px] w-[80px] p-2">
                Go Live
              </button>
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default Library;
