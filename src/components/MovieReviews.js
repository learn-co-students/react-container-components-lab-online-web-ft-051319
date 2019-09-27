import React from 'react';

const MovieReviews = (props) => {

    function displayEachReview(props){
        return props.reviews.map(review => {
            return (
                <div className="review">
                    <h3>{review.headline}</h3>
                    <p>{review.summary_short}</p>
                    <a href={review.link.url}>{review.link.suggested_link_text}</a>
                </div>
            )
        })
    }

    return (
        <div className="review-list">
            {displayEachReview(props)}
        </div>
    )
}

export default MovieReviews
