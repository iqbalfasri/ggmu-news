import React from "react";

import "./news.css";

function News() {
  return (
    <div className="container mb-5 mt-5">
      <div className="news--title-wrapper">
        <h3 className="news--title">News</h3>
        <h5 className="news--sub-title">View All</h5>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="news--content">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</h4>
            <img src="https://images.pexels.com/photos/2736136/pexels-photo-2736136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <p>
              Phasellus ultrices nulla et ipsum hendrerit scelerisque. Nam
              fermentum ultricies mi vel pretium. Praesent augue mauris, dictum
              a commodo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Phasellus ultrices nulla et ipsum hendrerit scelerisque. Nam
              fermentum ultricies mi vel pretium. Praesent augue mauris, dictum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
