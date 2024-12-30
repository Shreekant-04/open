import React, { useContext, useEffect, useState } from "react";
import "./css/body.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";

function Body() {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      const checkUser = async () => {
        try {
          const resp = await axios.post("/auth/verify");
          if (resp.data) {
            navigate(`/dashboard/${resp.data.email}`);
          }
        } catch (error) {
          navigate("/");
        }
      };
      checkUser();
    }
  }, [token]);

  return (
    <div className="p-4 h-[90vh] flex flex-col justify-between fixed">
      <div className="heading-Container">
        <h1 className="text-6xl">Welcome to QuizMaster!.</h1>
        <p className="text-xl">
          Challenge Your Mind, Have Fun & Learn New Things Discover a world of
          engaging quizzes across various topics.<br></br> From science to pop
          culture, we have something for everyone.<br></br> Test your knowledge,
          compete with friends, and unlock achievements
        </p>
      </div>
      <div className="join-Container">
        <div className="box-Join">
          <img src="" alt="logo" />
          <h1 className="text-2xl">Enter a Join Code to participate</h1>
          <p className="text-sm">Ask your host for join code</p>
          <input
            type="text"
            name="code"
            id="code"
            placeholder="Enter your join code here..."
          />
          <button>Join Now</button>
        </div>
      </div>

      <div className=" h-[15vh] flex flex-col justify-evenly items-center p-4">
        <p>Create your own Quiz and invite others to play</p>

        <button className="w-[200px] h-[50px] hover:scale-90 ease-in-out transition-all duration-200 border-[var(--purple--)]">
          Create a Quiz
        </button>
      </div>
    </div>
  );
}

export default Body;
