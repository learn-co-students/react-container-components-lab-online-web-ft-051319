import React from 'react';

const Review = ({display_title, headline, summary_short}) => {
    return (
        <div className="review" key={display_title} >
            <h1>{display_title}</h1>
            <h3>{headline}</h3>
            <p>{summary_short}</p>
        </div>
    )
}

const MovieReviews = props => {
    return (
        <div className="review-list">
            {props.reviews.map(Review)}
        </div>
    )
}

export default MovieReviews;