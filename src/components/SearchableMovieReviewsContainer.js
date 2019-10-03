import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'





    export default class SearchableMovieReviews extends Component{
        state = {
            searchTerm: "",
            reviews: []
        }

        handleSubmit = (event) => {
            event.preventDefault()
            this.fetchApi()
        }

        fetchApi(){
            fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=zSjkQLfp6vmz3JlroyM309tp41dmuDw5`)
            .then(response => response.json())
            .then(reviews => {
                this.setState({
                    reviews: reviews.results
                })
            })
        }


        handleChange = (event) => {
            this.setState({
                [event.target.name]: [event.target.value]
            })
        }
                            
        render(){
            return(
                <div className="searchable-movie-reviews">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="searchTerm" placeholder="Search" onChange={this.handleChange}></input>
                        <input type="submit" name="Submit"></input>
                    </form>
                    <MovieReviews reviews={this.state.reviews}/>
                </div>
            )
        }
                        
    }