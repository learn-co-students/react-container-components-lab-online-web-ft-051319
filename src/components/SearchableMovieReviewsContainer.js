import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'mn8GhWbZvxIgCYNVA8NFZPfzl31RTji2';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
 export default class SearchableMovieReviewsContainer extends Component {

    state ={
        searchTerm: "",
        reviews: []
    }

    // componentDidMount(){
    //     this.fetchSearchedMovies(URL + this.state.value)
    // }

   

    handleSearchChange = event => {
        this.setState({
            searchTerm: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL + this.state.searchTerm)
        .then(res => res.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="search" onChange={this.handleSearchChange}/>
                <button>Submit</button>
            </form>
            <h2>Movie Review By Search:</h2>
            <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
 }