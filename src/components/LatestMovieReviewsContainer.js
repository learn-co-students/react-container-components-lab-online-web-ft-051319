import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    getLatestReviews = () => {
        fetch(URL)
            .then(r => r.json())
            .then(data => this.setState({reviews: data.results}))
    }

    componentDidMount() {
        this.getLatestReviews();
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h1><u>The Latest Reviews</u></h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;