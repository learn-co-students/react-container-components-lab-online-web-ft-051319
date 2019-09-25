// Code MovieReviews Here
import React from 'react'


const MovieReviews = props => {
    
    return(
       
     <div className="review-list">{props.reviews.map((movieObj, idx) => {
        return(
            <div
            key={movieObj.headline}
            className="review"
            >
            <header>
              <a
                className="review-link"
                href={movieObj.link.url}
              >
                {movieObj.headline}
              </a>
              <br/>
              <span className="author">{movieObj.byline}</span>
            </header>
            <blockquote>{movieObj.summary_short}</blockquote>
          </div>
    )
    }) 
    }</div>
    )
}
 
export default MovieReviews