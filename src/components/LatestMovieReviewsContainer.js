import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'p8Pc6chBZJI7KkNTARNO26IH1ogi46YV';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviews extends Component {
    constructor(){
        super();

        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(movieReviews => this.setState({ reviews: movieReviews["results"] }))
    }

    render(){
        return (
            <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>
        )
    }
}

export default LatestMovieReviews