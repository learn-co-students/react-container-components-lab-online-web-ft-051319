import React from 'react';

    const MovieReviews =  ({ reviews }) =>{
        return(
         <div className="review-list">
            {reviews.map((review, index) =>
            <div className="review" key={index}>
                <img src={review.multimedia.src}></img>
                <h3>{review.headline}</h3>
                <h4>{review.byline}</h4>
                <a href={review.link.url}>{review.link.suggested_link_text}</a>
            </div>
            )}
        </div>
        )
    }

export default MovieReviews