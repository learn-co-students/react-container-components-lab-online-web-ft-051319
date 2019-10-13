// Code MovieReviews Here
import React from 'react'

function MovieReviews(props) {
  return (
      props.reviews.map((review, idx) => {
       return (<div className="review" id={idx}>Title: {review.display_title}; Short: {review.summary_short} </div>)
        })


     )
    }


export default MovieReviews
/*
 const mapMovieReviews = (props) => {
      props.reviews.map((review, idx) => {
       return (<div id={idx}>Title: {review.display_title}; Short: {review.summary_short} </div>)
          }
        )
      }

const MovieReviews = (props) => {
  return (
//  I tried to put a <div className = "review-list"> here but I kept getting an error
    <div>
      { (props) => { return
           (props.reviews.map((review, idx) => {
            return (<div id={idx}>Title: {review.display_title}; Short: {review.summary_short} </div>)
               }
             )
           )


         }
       }
      </div>
    )

}
*/
