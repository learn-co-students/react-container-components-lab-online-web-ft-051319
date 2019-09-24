import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'vKwZuvuvDtDMONCAgn0XpWtLezGS9FuE';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{

  constructor(){
    super()
    this.state={
      reviews: [],
      searchTerm: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let url= `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`
    url+=`&api-key=${NYT_API_KEY}`
    console.log(url)
    fetch(url)
    .then(resp=>resp.json())
    // .then(json=>console.log(json.results))
    .then(json=>this.setState({
      reviews: json.results
    }))
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form className="query-form" onSubmit={this.handleSubmit}>
          Search Movie: <input id='query' type="text" onChange={this.handleChange} value={this.state.searchTerm} />
          <input type="submit"/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
