import React from "react";

function QuickAction() {
  return (
    <div className="p-5 w-full">
      <h1 className="font-bold text-xl">Quick Action</h1>
      <p>Instant access to the most popular features</p>
      <div className="bg-[#EAD5E0] w-full h-[150px] rounded-2xl my-5 p-4 flex justify-center items-center">
        <div className="w-[75%]"> 
          <h2 className="font-bold text-lg">Create Quiz</h2>
          <p className="text-sm">
            Develop an interactive quiz to effectively assess comprehension and
            application of key concepts for your assignment test, ensuring
            alignment with core objectives.
          </p>
        </div>
        <section className="flex items-center w-[20%] justify-end">
          <button className="bg-black h-[50px]  text-white">
            Create Quiz
          </button>
        </section>
      </div>
    </div>
  );
}

export default QuickAction;
