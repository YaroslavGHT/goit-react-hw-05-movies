import { useParams,} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { requestCastById } from '../service/api.js';
import css from '../components/App.module.css'

const Cast = () => {
  const {movieId} = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const [defaultImg, setDefaultImg] = useState();


  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async () => {
      try {
        const castFilm = await requestCastById(movieId);
        setCastInfo(castFilm);
        setDefaultImg('https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700');
      } catch (error) {

      }
    };
    fetchCast();
  }, [movieId]);

    return (
    <div className={css.listCast}>
        {castInfo.length > 0 ? (
        castInfo.map((actor) => (
            <div key={actor.id}>
                <div>
                    <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : defaultImg} 
                        width={150} 
                        alt="poster" 
                    />
                    <h4>{actor.name}</h4>
                    <p>{actor.character}</p>
                </div>
            </div>
        ))
        ) : (
        <p>No actors found</p>
        )}
    </div>
    );
};

export default Cast;

