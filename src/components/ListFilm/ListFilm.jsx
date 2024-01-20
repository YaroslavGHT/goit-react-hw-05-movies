import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from '../App.module.css'


const ListFilm = ({ lists }) => {
  const location = useLocation(); 
  return (
    <>
      {lists.map(list => (
        <li key={list.id} className={css.listItem}>
          <Link state={{ from: location }} to={`/movies/${list.id}`}>
            {list.title || list.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default ListFilm;