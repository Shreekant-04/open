import React, { useContext, useState } from "react";
import axios from "axios"; // Import axios for making API requests
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function Login({ onLogin, onSignup }) {
  // State variables for managing form data
  const [email, setEmail] = useState("singhrajtilak64@gmail.com");
  const [password, setPassword] = useState("raj");
  const [error, setError] = useState(""); // For storing error messages
  const navigate = useNavigate();
  const {setToken,Loader} = useContext(UserContext)
  // Function to handle closing the modal
  const handleClose = () => {
    onLogin(); // Close the login modal
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic client-side validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      // API call for login
      const response = await axios.post("/auth/login", {
        email,
        password,
      });
      // Handle successful login (you may redirect or store user data in context/state)
      localStorage.setItem("token", response.data.token);
      // Close modal after successful login
      axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      setToken(response.data.token)
      handleClose();
      Loader()
      navigate(`/dashboard/${response.data.user.email}`);
    } catch (err) {
      // Handle errors
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen z-50 flex flex-col justify-center items-center bg-gray-900/20 fixed backdrop-blur-sm">
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8 w-screen">
          <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md bg-white rounded-xl relative">
            {/* Close Button */}
            <div className="mb-2 flex justify-end items-center">
              <button
                onClick={handleClose}
                className=" text-gray-600 w-[50px] h-[50px] text-4xl border-none hover:text-gray-900"
              >
                ×
              </button>
            </div>
            <h2 className="text-center text-xl font-bold leading-tight text-black">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 flex gap-2 w-full justify-center">
              Don't have an account?{" "}
              <span
                onClick={onSignup}
                className="border-b-2 border-[var(--purple--)] cursor-pointer"
              >
                Create a free account
              </span>
            </p>

            {/* Error message display */}
            {error && (
              <div className="mt-4 text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                {/* Email Field */}
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} // Update email state
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>
                    <a
                      className="text-sm font-semibold text-black hover:underline"
                      href="#"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Update password state
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    className="inline-flex h-[45px] w-full items-center justify-center rounded-md bg-[var(--purple--)] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[var(--purple-light--)] transition-all duration-150"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
