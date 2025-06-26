import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-white">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-96 max-w-full">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-purple-700">Create Account</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-600 hover:underline font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
