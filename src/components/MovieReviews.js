// Code MovieReviews Here
import React from 'react'; //{Component} not required for functional stateless components

const MovieReviews = (props) => {
  return(
    <div className="review-list">
      {props.reviews.map(review =>
        <div className='review'>
        <p>{review.byline}</p>
        <p>{review.headline}</p>
        </div>)}
    </div>
  )
}


export default MovieReviews;


// byline: "BEN KENIGSBERG"
// critics_pick: 0
// date_updated: "2019-09-24 11:04:02"
// display_title: "Anthropocene: The Human Epoch"
// headline: "‘Anthropocene: The Human Epoch’ Review: Global Warnings"
// link: {type: "article", url: "http://www.nytimes.com/2019/09/24/movies/anthropocene-the-human-epoch-review.html", suggested_link_text: "Read the New York Times Review of Anthropocene: The Human Epoch"}
// mpaa_rating: ""
// multimedia: {type: "mediumThreeByTwo210", src: "https://static01.nyt.com/images/2019/09/23/arts/anthropocene2/anthropocene2-mediumThreeByTwo210.jpg", width: 210, height: 140}
// opening_date: "2019-09-25"
// publication_date: "2019-09-24"
// summary_short: "This documentary narrated by Alicia Vikander captures alarming ways in which Earth’s natural beauty has been disturbed."
// __proto__: Object
