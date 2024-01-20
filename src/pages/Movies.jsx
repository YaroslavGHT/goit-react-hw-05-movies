import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { requestMovieByQuery } from '../service/api.js';
import ListFilm from 'components/ListFilm/ListFilm.jsx';
import css from '../components/App.module.css'

const SearchMoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [findMovies, setfindMovies] = useState([]);

  const query = searchParams.get('sQuery');

  useEffect(() => {
    if (query === null) return;
    const fetchPostsByQuery = async () => {
      try {
        const find = await requestMovieByQuery(query);
        setfindMovies(find.results);
      } catch (error) {
      }
    };
    fetchPostsByQuery();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchInput.value;
    setSearchParams({
      sQuery: searchValue,
    });
  };

  return (
    <div className={css.main}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchInput" defaultValue={query} required />
        <button type="submit">Search</button>
      </form>
      {findMovies && findMovies.length > 0 ? (
        <ul>
          <ListFilm lists={findMovies} />
        </ul>
      ) : (
        <p>Enter what you want find</p>
      )}
    </div>
  );
};

export default SearchMoviesPage;
