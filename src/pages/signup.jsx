import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuthStore  from "../components/hooks/UseAuthStore";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthStatus } = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://call-africa-a27ed3a5b0f4.herokuapp.com/api/auth/signup', {
        username: formData.username,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
      });

      console.log('Signup successful:', response.data);
      navigate('/login');
      setAuthStatus(true);
    } catch (error) {
      setError(error.response.data.error);
      console.error('Signup error:', error.response.data.error)
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-full h-screen flex justify-center px-4 sm:px-6 lg:px-8 top-0">
      <div className="bg-white w-full max-w-2xl border p-8 rounded-lg shadow-lg h-auto my-auto">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-4">
          Call Africa
        </h1>

        <p className="text-center text-base text-gray-500 px-6">
          Create your account
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
              htmlFor="username"
            >
              Name
            </label>
            <input
              id="username"
              name="username"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              type="text"
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              className="block text-base font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              className="block text-base font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
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
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-700 text-white py-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "signUp"}
          </button>
        </form>

        <div className="flex justify-center mt-4">
          <span className="text-base font-medium text-gray-500">
            Already have an account?{' '}
            <Link
              to="/login"
              className=" text-red-300 hover:text-red-500 transition-colors duration-200"
            >
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;