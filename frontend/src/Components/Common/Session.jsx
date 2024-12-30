import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function Session() {
  const navigate = useNavigate();
  const {token} = useContext(UserContext)
  useEffect(() => {
    const checkUser = async () => {
      try {
        const resp = await axios.post("/auth/verify");
        axios.defaults.headers.Authorization = "Bearer " + token
      } catch (error) {
       navigate("/");
      }
    };
    checkUser()

  },[token]);
  return <></>;
}

export default Session;
