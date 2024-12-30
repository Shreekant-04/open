import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Common/Navbar";
import Body from "./Body";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import { UserContext } from "../../App";
import Loading from "../Common/Loading";

function Main() {
  const [login, setLogin] = useState(false);
  const [signup, setSign] = useState(false);
  const {loading} = useContext(UserContext)

  const handleLogin = () => {
    setSign(false);
    setLogin((prev) => !prev);
  
  };

  const handleSignup = () => {
    setLogin(false)
    setSign((prev) => !prev);
  };

  return (
    <>
      {login && <Login onLogin={handleLogin} onSignup={handleSignup} />}
      {signup && <Signup onLogin={handleLogin} onSignup={handleSignup} />}
      {loading && <Loading/>}
      <Navbar onLogin={handleLogin} onSignup={handleSignup} />
      <Body />
    </>
  );
}

export default Main;
