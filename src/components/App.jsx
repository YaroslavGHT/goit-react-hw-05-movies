import { NavLink, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import css from './App.module.css'

const Home = lazy(() => import('../pages/Home.jsx'));
const SearchMoviesPage = lazy(() => import('../pages/Movies.jsx'));
const MovieDetails = lazy(() => import('../pages/MovieDetails.jsx'));

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <NavLink
          className={({ isActive }) => `${css.navlink} ${isActive ? css.active : ''}`}
          to="/" end>Home</NavLink>
        <NavLink
          className={({ isActive }) => `${css.navlink} ${isActive ? css.active : ''}`}
          to="/movies" end>Movies</NavLink>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies/:movieId/*" element={<MovieDetails />}></Route>
            <Route path="/movies" element={<SearchMoviesPage/>}></Route>
          </Routes> 
        </Suspense>
      </main>
    </div>
  );
};


