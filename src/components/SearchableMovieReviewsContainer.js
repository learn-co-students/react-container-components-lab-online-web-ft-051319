import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    searchReviews = (e) => {
        e.preventDefault();
 
        fetch(URL.concat(this.state.searchTerm))
            .then(r => r.json())
            .then(data => this.setState({reviews: data.results}))
    }

    handleInputText = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.searchReviews} >
                    <input type="text" id="searchTerm" onChange={this.handleInputText} value={this.state.searchTerm} placeholder="Movie Title" />
                    <button type="submit" >Search Movie Reviews</button>
                </form>
                {this.state.searchTerm ? <h2><u>Search Results</u></h2> : ''}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;