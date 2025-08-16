import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    // Redirect to homepage on successful validation
    navigate('/browse');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-75 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-black bg-opacity-75 p-8 rounded">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to Netflix
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded relative block w-full px-3 py-4 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded relative block w-full px-3 py-4 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded bg-gray-700"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-gray-300 hover:text-white">
                Need help?
              </a>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              variant="primary"
              className="w-full flex justify-center py-3"
            >
              Sign in
            </Button>
          </div>

          <div className="text-gray-300 text-sm">
            <p>
              New to Netflix?{' '}
              <a href="#" className="text-white hover:underline">
                Sign up now
              </a>
            </p>
            <p className="mt-2">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
