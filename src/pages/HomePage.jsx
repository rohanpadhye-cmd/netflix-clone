import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies, fetchPopularMovies } from '../services/movieService';
import Navbar from '../components/layout/Navbar';
import MovieRow from '../components/ui/MovieRow';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const [trending, popular] = await Promise.all([
          fetchTrendingMovies(),
          fetchPopularMovies()
        ]);
        
        setTrendingMovies(trending);
        setPopularMovies(popular);
        
        // Set a random popular movie as featured
        if (popular.length > 0) {
          setFeaturedMovie(popular[Math.floor(Math.random() * popular.length)]);
        }
      } catch (error) {
        console.error('Error loading movies:', error);
      }
    };
    loadMovies();
  }, []);

  // Log the fetched data for debugging
  useEffect(() => {
    console.log('Trending Movies:', trendingMovies);
    console.log('Popular Movies:', popularMovies);
  }, [trendingMovies, popularMovies]);

  // Utility to check if an image exists
  const checkImageExists = (url, fallback, cb) => {
    if (!url) {
      cb(fallback);
      return;
    }
    const img = new window.Image();
    img.onload = () => cb(url);
    img.onerror = () => cb(fallback);
    img.src = url;
  };

  const MovieCard = ({ movie }) => {
    const [imgSrc, setImgSrc] = useState(
      movie?.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image'
    );

    useEffect(() => {
      const url = movie?.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null;
      checkImageExists(
        url,
        'https://via.placeholder.com/500x750?text=No+Image',
        setImgSrc
      );
    }, [movie?.poster_path]);

    // Use poster_path if available, else fallback
    const imageUrl = movie?.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : 'https://via.placeholder.com/500x750?text=No+Image';

    console.log('Movie data:', { 
      title: movie?.title,
      posterPath: movie?.poster_path,
      fullImageUrl: imageUrl 
    });

    return (
      <div className="relative group cursor-pointer">
        <div className="aspect-[2/3] rounded-md overflow-hidden bg-gray-900">
          <img
            src={imgSrc}
            alt={movie?.title || 'Movie poster'}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-200"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-center justify-center">
          <button className="opacity-0 group-hover:opacity-100 bg-red-600 text-white px-4 py-2 rounded">
            Play
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="text-white font-semibold truncate">{movie?.title}</h3>
          <p className="text-gray-300 text-sm">{movie?.release_date ? new Date(movie.release_date).getFullYear() : ''}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[80vh] w-full">
        <img
          src="https://image.tmdb.org/t/p/original/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"
          alt="Featured Movie"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-12 w-full md:w-1/2 space-y-4">
          <h1 className="text-5xl font-bold">Featured Movie Title</h1>
          <p className="text-lg text-gray-300">
            This is a brief description of the featured movie. Watch now or learn more.
          </p>
          <div className="flex space-x-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded flex items-center">
              <span className="mr-2">▶</span> Play
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded">
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Movie Rows */}
      <div className="container-custom py-8 space-y-12">
        <MovieRow title="Trending Now" fetchFunction="fetchTrendingMovies" />
        <MovieRow title="Popular on Netflix" fetchFunction="fetchPopularMovies" />
        <MovieRow title="Top Rated" fetchFunction="fetchTopRatedMovies" />
        <MovieRow title="Action Movies" fetchFunction="fetchActionMovies" />
        <MovieRow title="Comedy Movies" fetchFunction="fetchComedyMovies" />
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

export default HomePage;
