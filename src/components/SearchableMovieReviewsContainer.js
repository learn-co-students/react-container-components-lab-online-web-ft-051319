import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '0ODMOo4OyzFatGPzghZUSJNOIch5hYAd';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';
          

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handlesubmit = (e) => {
        e.preventDefault();

        let search = URL + `query=${this.state.searchTerm}` + `&api-key=${NYT_API_KEY}`;
        fetch(search)
        .then(response => response.json())
        .then(reviews => this.setState({
            reviews: reviews['results']
        }))
        // .then(blah => console.log(this.state.reviews))
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handlesubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}