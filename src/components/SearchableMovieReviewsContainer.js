import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

//const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const NYT_API_KEY= 'ok8TtkPdZYdV4VvBm0VxJJsAkqQqRkh4'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm:""
    }
  }

  fetchReviews = (URLSEARCH) => {
    fetch(URLSEARCH)
      .then (resp => resp.json())
      .then (resp => this.setState({reviews: resp.results}))

  }
  handleSubmit = (event) => {
    event.preventDefault()
    //console.log(this.state.searchTerm)

      var URLSEARCH = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
                  + `${this.state.searchTerm}` + `&api-key=${NYT_API_KEY}`

      fetch(URLSEARCH)
      .then (resp => resp.json())
      .then (resp => this.setState({reviews: resp.results}))



  }
  handleChange = (event) => {

    this.setState({searchTerm: event.target.value})
  }
  render() {
    return (<div className="searchable-movie-reviews">

      <p>Enter a search term:</p>
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.searchTerm} name="searchTerm" onChange={this.handleChange} />


        <button type="submit">Find Reviews</button>

      </form>
            <MovieReviews reviews={this.state.reviews} />
          </div>


        )
  }


}

export default SearchableMovieReviewsContainer
