// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {

    // const review = ({ headline, link: { url } }) => {
    //     <div className="review">
    //         <h1>{headline}</h1>
    //         <a href={url}>Link to review</a>
    //     </div>
    // }

    const reviews = props.reviews.map((review, idx) => {
        return <div key={idx} className="review"><a href={review.link.url}>{review.headline}</a></div>
    })

    

    return (
        <div className="review-list">
            {reviews}
        </div>
    )
};

export default MovieReviews;