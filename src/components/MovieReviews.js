// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
    let movies = props.reviews.map((movieObj, idx) => {
    return( 
    <li>
        <div key={movieObj.headline} className="review"> 
            <header>
                <a className="review link" href={movieObj.link.url}>
                    {movieObj.headline}
                </a>
                <br/>
                <span className="author">{movieObj.byline}</span>
            </header> 
            <blockquote>{movieObj.summary}</blockquote>
        </div>
    </li>
    )
    })

    return(
        <div className="review-list">
            <ul>
                {movies}
            </ul>
        </div>
    ) 
}

export default MovieReviews