import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews:[]
    }
  }

  componentDidMount() {
    this.fetchReviews()
  }
  fetchReviews(){
    fetch(URL)
      .then (resp => resp.json())
      .then (resp => this.setState({reviews: resp.results}))
        //this.setState({reviews: resp.data}))

  }
  render() {
    return(

      <div className="latest-movie-reviews">
      <MovieReviews className="review-list" reviews={this.state.reviews} />
        </div>
    )
  }
}

export default LatestMovieReviewsContainer
