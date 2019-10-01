import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import Key from '../keys'
//const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${Key.NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super()

        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleSearchInputChange = event => this.setState({searchTerm: event.target.value})

   handleSubmit = event => {
       event.preventDefault()

       fetch(URL+this.state.searchTerm)
       .then(res => res.json())
       .then(res => this.setState({reviews: res.results}))
   } 

   render(){
       return(
           <div className="searchable-movie-reviews">
               <form onSubmit={this.handleSubmit}>
                   <label>Search Movie Reviews</label>
                   <input
                    id="search-input"
                    type="text"
                    style={{width: 30}}
                    onChange={this.handleSearchInputChange} />
                <button type="submit">Submit</button>

                <MovieReviews reviews={this.state.reviews} />
               </form>

           </div>
       )
   }
}
 