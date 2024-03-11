import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="bg-white  min-h-full h-screen flex justify-center px-4 sm:px-6 lg:px-8 top-0">
      <div className="bg-white w-full max-w-2xl border p-8 rounded-lg shadow-lg h-auto my-auto">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-4">
          Call Africa
        </h1>

        <p className="text-center text-base text-gray-500 px-6">
          Login to your account
        </p>

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
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;