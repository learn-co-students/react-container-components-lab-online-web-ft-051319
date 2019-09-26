import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '0ODMOo4OyzFatGPzghZUSJNOIch5hYAd';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


// trying 2 approaches using destructuring and custom filtering the fetch request 

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

    constructor() {
        super()

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
          .then(response => response.json())
        //   .then(response => console.log(response))
        //   json within reviews['results']
          .then(reviews => this.setState({
              reviews: reviews['results']
          }))
        //   .then(reviews => this.setState({
        //       reviews: reviews['results']
        //   }))
        //   .then(reviews => this.setState({ reviews }))
        //   .then(blah => console.log(this.state.reviews))
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }


};