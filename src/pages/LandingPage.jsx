import React from 'react';
import Button from '../components/ui/Button';

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-xl md:text-2xl mb-8">Watch anywhere. Cancel anytime.</p>
          <div className="max-w-3xl w-full">
            <p className="text-lg md:text-xl mb-4">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 w-full md:w-96 bg-black bg-opacity-40 border border-gray-600 rounded text-white focus:outline-none focus:border-white"
              />
              <Button variant="primary" className="px-8 py-3 text-xl">
                Get Started &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 border-t-8 border-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Enjoy on your TV</h2>
              <p className="text-xl">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
                players, and more.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
                alt="Enjoy on your TV"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 border-t-8 border-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://image.tmdb.org/t/p/w500/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"
                alt="Download your shows to watch offline"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">
                Download your shows to watch offline
              </h2>
              <p className="text-xl">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container-custom text-center">
          <p>© 2025 Netflix Clone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
