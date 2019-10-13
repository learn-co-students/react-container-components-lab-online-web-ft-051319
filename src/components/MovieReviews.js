// Code MovieReviews Here
import React from 'react'

const  MovieReviews = (props) => {
  return (
        <div className='review-list'>
      {
        props.reviews.map((review, idx) => {
       return (<div className="review" id={idx}>Title: {review.display_title}; Short: {review.summary_short} </div>)
        })
      }
      </div>

     )
    }


export default MovieReviews
