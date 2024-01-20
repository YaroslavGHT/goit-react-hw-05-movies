import React, { useEffect, useState } from 'react';
import { requestTrendMovies } from '../service/api.js'
import ListFilm from '../components/ListFilm/ListFilm.jsx'
import css from '../components/App.module.css'

const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);


  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const trend = await requestTrendMovies();
        setTrendFilms(trend.results);
      } catch (error) {
        console.error('Error fetching trend movies:', error);
      }
    };
    fetchTrendMovies();
  },[]);

  return (
    <div className={css.main}>
      <h2>Trending today</h2>
      {trendFilms.length > 0 ? (
        <ul className={css.listfilm}>
          <ListFilm lists={trendFilms} />
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
