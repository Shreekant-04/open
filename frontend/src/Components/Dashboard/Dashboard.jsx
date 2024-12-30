import React, { useState } from "react";
import Session from "../Common/Session";
import Navbar from "../Common/Navbar";
import Sidebar from "./Sidebar";
import Search from "./Search";
import QuickAction from "./QuickAction";
import Library from "./Library";
import Template from "./Template";
import CreateQuiz from "../CreateQuiz/CreateQuiz";

function Dashboard() {
  const [isQuiz, setQuiz] = useState(false);
  const createQuiz = () => {
    setQuiz((prev) => !prev);
  };
  return (
    <div>
      <Session />
      {isQuiz &&  <CreateQuiz setQuiz={createQuiz} />}
     
      <Navbar setQuiz={createQuiz} />
      <div className="flex justify-between">
        <Sidebar />
        <div className="fixed w-[80vw] h-[85vh] right-0 p-4">
          <Search />
          <div className="overflow-y-auto h-full">
            <QuickAction />
            <Library />
            <Template />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
