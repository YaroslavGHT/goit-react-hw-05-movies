import { NavLink, Link, useParams, Route, Routes, useLocation} from 'react-router-dom';
import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { requestDetailById } from '../service/api.js';
import css from '../components/App.module.css'

const Cast = lazy(() => import('./Cast.jsx'));
const Reviews = lazy(() => import('./Reviews.jsx'));

const MovieDetails = () => {
  const {movieId} = useParams();
  const [genres, setGenres] = useState();
  const [title, setTitle] = useState();
  const [yearFilm, setYearFilm] = useState();
  const [voteAvarage, setVoteAvarage] = useState();
  const [overview, setOverview] = useState();
  const [poster, setPoster] = useState();
  const [defaultImg, setDefaultImg] = useState();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const fetchDetail = async () => {
      try {
        const detailFilm = await requestDetailById(movieId);
        const {poster_path, title, genres, release_date, vote_average, overview } = detailFilm;
        setGenres(genres.map(genre => genre.name).join('  '));
        setTitle(title);
        setYearFilm(release_date.slice(0, 4));
        setVoteAvarage(vote_average);
        setOverview(overview);
        setDefaultImg('https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700')
        setPoster(poster_path);
      } catch (error) {
      }
    };
    fetchDetail();
  }, [movieId]);

  return (
    <div className={css.deteilsMain}>
      <Link to={backLinkRef.current}>Go back</Link>
      <div>
        <div className={css.deteilsDiv}>
          <div className={css.poster}>
            <img src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : defaultImg} 
              width={250} 
              alt="poster" 
            />
          </div>
          <div className={css.infoFilm}>
            <h2>{title} ({yearFilm})</h2>
            <p className={css.textInfo}>Vote average: {voteAvarage}</p>
            <h3>Overview</h3>
            <p className={css.textInfo}>{overview}</p>
            <h3>Genres</h3>
            <p className={css.textInfo}>{genres}</p>
          </div>
        </div>  
        <div>
          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink to="cast/" >Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews/">Reviews</NavLink>
            </li>
          </ul>
        </div>
        <div>
            <Suspense>
              <Routes>
                <Route path="cast/" element={<Cast />}></Route>
                <Route path="reviews/" element={<Reviews />}></Route>
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default MovieDetails;





