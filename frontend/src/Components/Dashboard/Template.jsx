import React, { useState } from "react";

function Template() {
  const [template, setTemp] = useState([
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
      <h1 className="font-bold text-xl">Template</h1>
      <p>
        Make a duplicate and begin utilizing these templates to create your own
        quiz.
      </p>
      <div className="w-full rounded-2xl my-5 flex justify-start flex-wrap gap-4 items-center">
        {template.map((item, index) => {
          return (
            <div key={index} className="w-[250px] h-[300px] border rounded-xl">
              <div className="bg-gray-300 w-full h-[60%] rounded-t-xl"></div>
              <div className="w-full flex flex-col justify-evenly items-start p-4 h-[40%]">
                <div className="flex gap-1">
                  <img src="/check.svg" alt="" />
                  <p className="font-bold text-sm">Assessment</p>
                </div>
                <h2 className="font-bold">UX/UI</h2>
                <p className="text-gray-400 text-sm">11 questions</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Template;
