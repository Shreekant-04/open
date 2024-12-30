import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function Signup({ onSignup, onLogin }) {
  // State for form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate();
  // Function to handle closing the modal
  const handleClose = () => {
    onSignup(); // Close the modal
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await axios.post("/auth/signup", {
        fname: fullName,
        email,
        password,
      });

      // Handle response (e.g., show success message or redirect)
      localStorage.setItem("token", response.data.user.token);
      axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      setToken(response.data.token);
      navigate(`/dashboard/${response.data.user.email}`);
      // Optionally, close modal on success
      handleClose();
    } catch (error) {
      // Handle error
      console.error("Error:", error);
      // You can show an error message to the user here
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
                className="text-gray-600 w-[50px] h-[50px] text-4xl border-none hover:text-gray-900"
              >
                ×
              </button>
            </div>
            <h2 className="text-center text-xl font-bold leading-tight text-black">
              Create a free account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 flex gap-2 w-full justify-center">
              Already have an account?{" "}
              <span
                onClick={onLogin}
                className="border-b-2 border-[var(--purple--)] cursor-pointer"
              >
                Sign In
              </span>
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Full Name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>

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
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    Create Account
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

export default Signup;
