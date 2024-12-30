import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/LandingPage/Main";
import axios from "axios";
import Dashboard from "./Components/Dashboard/Dashboard";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();
function App() {
  const [token, setToken] = useState("");
  const [isLoading, setLoading] = useState(false);
  axios.defaults.baseURL = "http://localhost:5000/api/v1";
  axios.defaults.headers.Authorization = "Bearer " + token;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, [token]);

  const checkLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  return (
    <UserContext.Provider
      value={{ token: token, setToken: setToken, Loader: checkLoading, Loading: isLoading }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard/:email" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
