import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'p8Pc6chBZJI7KkNTARNO26IH1ogi46YV';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'       
    + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviews extends Component {
    constructor(){
        super();

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSearch = () => {
        fetch(URL + `&query=${this.state.searchTerm}` )
        .then(res => res.json())
        .then(movieReviews => this.setState({...this.state.searchTerm, reviews: movieReviews["results"]}, () => console.log(this.state)))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSearch}>
                <input name="searchTerm" type="text" onChange={this.handleChange} value={this.state.searchTerm} />
                <input type="submit" value="search" />
            </form>
            <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviews
