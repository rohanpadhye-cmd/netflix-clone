import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { fetchTrendingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchActionMovies, fetchComedyMovies } from '../../services/movieService';
import leftArrow from '../../assets/images/leftarrow.svg';
import rightArrow from '../../assets/images/rightarrow.svg';

const MovieRow = ({ title, fetchFunction }) => {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let fetchFn;
        switch (fetchFunction) {
          case 'fetchTrendingMovies':
            fetchFn = fetchTrendingMovies;
            break;
          case 'fetchPopularMovies':
            fetchFn = fetchPopularMovies;
            break;
          case 'fetchTopRatedMovies':
            fetchFn = fetchTopRatedMovies;
            break;
          case 'fetchActionMovies':
            fetchFn = fetchActionMovies;
            break;
          case 'fetchComedyMovies':
            fetchFn = fetchComedyMovies;
            break;
          default:
            throw new Error('Invalid fetch function');
        }
        const data = await fetchFn();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [fetchFunction]);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - rowRef.current.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      rowRef.current.scrollLeft = scrollLeftStart - walk;
    },
    [isDragging, startX, scrollLeftStart]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const scrollRow = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      const scrollAmount = clientWidth;

      if (direction === 'right') {
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          rowRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft === 0) {
          rowRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          rowRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - rowRef.current.offsetLeft);
    setScrollLeftStart(rowRef.current.scrollLeft);
  };

  return (
    <div className="relative group">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex items-center">
        {/* Left Scroll Button */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-50 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          onClick={() => scrollRow('left')}
        >
          <img src={leftArrow} alt="Scroll Left" className="w-6 h-6" />
        </button>

        {/* Movie Row */}
        <div
          ref={rowRef}
          className="flex space-x-4 overflow-x-scroll overflow-y-hidden scrollbar-hide relative faded-edges cursor-pointer"
          onMouseDown={handleMouseDown}
        >
          {movies.map((movie, index) => (
            <div
              key={`${movie.id}-${index}`}
              className="w-40 flex-shrink-0 transform transition-transform duration-300 hover:scale-110 noselect"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto rounded"
                draggable={false}
              />
              <p className="text-sm mt-2 text-center text-white truncate">
                {movie.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-50 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          onClick={() => scrollRow('right')}
        >
          <img src={rightArrow} alt="Scroll Right" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

MovieRow.propTypes = {
  title: PropTypes.string.isRequired,
  fetchFunction: PropTypes.string.isRequired,
};

export default MovieRow;

