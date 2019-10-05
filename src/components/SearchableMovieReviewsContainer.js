import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    getReviews() {
        fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.getReviews()
    }

    handleInput = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit} >
                    <input type="text" onChange={this.handleInput} value={this.state.searchTerm} />
                    <button type="submit" > Search Movie Reviews </button>
                </form>
                {this.state.searchTerm ? <h2>Search Results</h2> : ''}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}