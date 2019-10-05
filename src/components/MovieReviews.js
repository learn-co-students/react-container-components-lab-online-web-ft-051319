import React from 'react';

const Review = ({display_title, headline, summary}) => {
    return (
        <div className="review" key={display_title} >
            <h2>{display_title}</h2>
            <h4>{headline}</h4>
            <p>{summary}</p>
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