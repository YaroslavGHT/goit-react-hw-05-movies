import axios from "axios";

const optionsSerch = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {query: 'searchQuery', include_adult: 'false', language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdmZmEwOWM1OGUxMWRkMDkxOWIwOWVhMGVlNzY3YyIsInN1YiI6IjY1OWRhMmRlOGU4ZDMwMDI1ZTEyMmQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TauG2kaZCWmE6tcTttPv005Z5SYBlyhLi3nQiU1XSEM'
  }
};

export const requestMovieByQuery = async (searchQuery) => {
  optionsSerch.params.query = searchQuery;
  try {
    const response = await axios.request(optionsSerch);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const optionsTrend = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdmZmEwOWM1OGUxMWRkMDkxOWIwOWVhMGVlNzY3YyIsInN1YiI6IjY1OWRhMmRlOGU4ZDMwMDI1ZTEyMmQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TauG2kaZCWmE6tcTttPv005Z5SYBlyhLi3nQiU1XSEM'
  }
};

export const requestTrendMovies = async () => {
    try {
    const response = await axios.request(optionsTrend);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const optionsDetail = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdmZmEwOWM1OGUxMWRkMDkxOWIwOWVhMGVlNzY3YyIsInN1YiI6IjY1OWRhMmRlOGU4ZDMwMDI1ZTEyMmQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TauG2kaZCWmE6tcTttPv005Z5SYBlyhLi3nQiU1XSEM'
}}


export const requestDetailById = async (movieId) => {
  optionsDetail.url = `https://api.themoviedb.org/3/movie/${movieId}`;
    try {
      const response = await axios.request(optionsDetail);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

const optionsCast = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/{movieId}/credits',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdmZmEwOWM1OGUxMWRkMDkxOWIwOWVhMGVlNzY3YyIsInN1YiI6IjY1OWRhMmRlOGU4ZDMwMDI1ZTEyMmQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TauG2kaZCWmE6tcTttPv005Z5SYBlyhLi3nQiU1XSEM'
  }
};

export const requestCastById = async (movieId) => {
  optionsCast.url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  try {
    const response = await axios.request(optionsCast);
    return response.data.cast;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const optionsReviews = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id/reviews',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdmZmEwOWM1OGUxMWRkMDkxOWIwOWVhMGVlNzY3YyIsInN1YiI6IjY1OWRhMmRlOGU4ZDMwMDI1ZTEyMmQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TauG2kaZCWmE6tcTttPv005Z5SYBlyhLi3nQiU1XSEM'
  }
};

export const requestReviewsById = async (movieId) => {
  optionsReviews.url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
    try {
      const response = await axios.request(optionsReviews);
      return response.data.results;
    } catch (error) {
      console.error(error);
      throw error;
    }
};