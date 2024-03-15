import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../components/hooks/UseAuthStore";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthStatus, setAuthToken, setAuthProfile } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://call-africa-a27ed3a5b0f4.herokuapp.com/api/auth/login",
        {
          email,
          password,
        }
      );

      setAuthToken(response.data.access_token);
      setAuthProfile(response.data.user);
      setAuthStatus(true);
      navigate("/");
      console.log("Login successful:", response.message);

    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>

      <div className="bg-white min-h-full h-screen flex justify-center px-4 sm:px-6 lg:px-8 top-0">
        <div className="bg-white w-full max-w-2xl border p-8 rounded-lg shadow-lg h-auto my-auto">
          <h1 className="text-4xl font-bold text-center text-gray-700 mb-4">
            Call Africa
          </h1>

          <p className="text-center text-base text-gray-500 px-6">
            Login to your account
          </p>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-base font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div>
              <label
                className="block text-base font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-base font-medium text-gray-500 hover:text-indigo-500 cursor-pointer">
                Forgot password?
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-200"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>

          <div className="flex justify-center mt-4">
            <span className="text-base font-medium text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-red-300 hover:text-red-500 transition-colors duration-200"
              >
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;