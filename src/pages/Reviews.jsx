import { useParams,} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { requestReviewsById } from '../service/api.js';

const Reviews = () => {
  const {movieId} = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);


  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async () => {
      try {
        const reviewstFilm = await requestReviewsById(movieId);
        setReviewsInfo(reviewstFilm);
      } catch (error) {
      }
    };
    fetchCast();
  }, [movieId]);

    return (
    <ul>
        {reviewsInfo.length > 0 ? (
        reviewsInfo.map((review) => (
            <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content }</p>  
            </li>        
        ))
        ) : (
        <p>We don't have any reviews about this film</p>
        )}
    </ul>
    );
};

export default Reviews;

