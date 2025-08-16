const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

// Debug log to check if environment variables are loaded
console.log('API Configuration:', { 
  baseUrl: BASE_URL,
  hasAccessToken: !!ACCESS_TOKEN,
  accessTokenPrefix: ACCESS_TOKEN?.substring(0, 20) + '...'
});

const fetchWithAuth = async (endpoint) => {
  try {
    // Debug log for request
    console.log('Making API request to:', `${BASE_URL}${endpoint}`);
    
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const data = await fetchWithAuth('/trending/movie/week');
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    return await fetchWithAuth(`/movie/${movieId}`);
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const fetchPopularMovies = async () => {
  try {
    const data = await fetchWithAuth('/movie/popular');
    return data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const data = await fetchWithAuth(`/search/movie?query=${encodeURIComponent(query)}`);
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const fetchComedyMovies = async () => {
  try {
    const data = await fetchWithAuth('/discover/movie?with_genres=35');
    return data.results;
  } catch (error) {
    console.error('Error fetching comedy movies:', error);
    return [];
  }
};

export const fetchActionMovies = async () => {
  try {
    const data = await fetchWithAuth('/discover/movie?with_genres=28');
    return data.results;
  } catch (error) {
    console.error('Error fetching action movies:', error);
    return [];
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const data = await fetchWithAuth('/movie/top_rated');
    return data.results;
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    return [];
  }
};
