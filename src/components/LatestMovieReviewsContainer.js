import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'mn8GhWbZvxIgCYNVA8NFZPfzl31RTji2';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    state ={
        reviews: []
    }

    componentDidMount(){
        this.fetchLatestMovies()
    }

    fetchLatestMovies(){
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }
    render(){
        
        return(
            <div className="latest-movie-reviews">
                <h2>The Latest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

