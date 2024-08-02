import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="mx-auto bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-600 h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full   bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Welcome Back</h1>
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="flex justify-end">
            <Link to="/forgetPassword" className="text-purple-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Log In
          </button>
          <div className="text-right">
            <p className="text-sm text-gray-600">
              New User?{" "}
              <Link to="/signup" className="text-purple-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
