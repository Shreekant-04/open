import React, { useContext, useEffect, useState } from "react";
import "./css/Navbar.css";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

function Navbar({ onLogin, onSignup ,setQuiz }) {
  const [isLogin, setLogin] = useState(false);
  const { token } = useContext(UserContext);
  

  // Effect hook to check if the user is logged in based on token
  useEffect(() => {
    // Check for token in localStorage
    if (token) {
      setLogin(true);
    } else {
      setLogin(false); // Explicitly set to false if no token
    }
  }, []); // Empty dependency array to run only once when component mounts
 
  return (
    <div className="navBar">
      <section>
        <Link to="/">
          <img width={"50px"} height={"50px"} src="/logo.svg" alt="logo" />
        </Link>
      </section>

      {isLogin ? (
        <section className="flex items-center w-[50%] justify-end">
          <button
            className="bg-[var(--purple--)] w-1/3 text-white"
            onClick={setQuiz}
          >
            Create Quiz
          </button>
          {/* <img
            width={"50px"}
            src="https://cdn2.iconfinder.com/data/icons/male-avatars/512/avatars_accounts___man_male_people_person_beard_round_glasses_glasses_turtleneck_jacket.png"
            alt="User Avatar"
          /> */}
        </section>
      ) : (
        <section className="flex w-[75%] justify-end items-center">
          <button className="login" onClick={onLogin}>
            Login
          </button>
          <button className="signup" onClick={onSignup}>
            Signup
          </button>
        </section>
      )}
    </div>
  );
}

export default Navbar;
