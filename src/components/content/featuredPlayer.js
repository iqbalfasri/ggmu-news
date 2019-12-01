import React from "react";

import "./featuredPlayer.css";

function FeaturedPlayer() {
  return (
    <div className="container mb-5 mt-5">
      <div className="featured-player--title-wrapper">
        <h3 className="featured-player--title">Featured Player</h3>
        <h5 className="featured-player--sub-title">View All</h5>
      </div>
      <div className="row mt-5">
        <div className="col-md-3">
          <div className="featured-player--content">
            <h4>Ronaldo</h4>
            <img src="https://s1.15min.lt/images/photos/2018/11/24/original/cristiano-ronaldo-5bf9a19bedbea.jpg" />
            <p>
              Phasellus ultrices nulla et ipsum hendrerit scelerisque. Nam
              fermentum ultricies mi vel pretium. Praesent augue mauris, dictum
              a commodo
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="featured-player--content">
            <h4>Beckam</h4>
            <img src="https://img.okeinfo.net/content/2019/05/10/51/2054077/awal-karier-cemerlang-beckham-dimulai-dari-old-trafford-MVpsqUdtoS.jpg" />
            <p>
              Phasellus ultrices nulla et ipsum hendrerit scelerisque. Nam
              fermentum ultricies mi vel pretium. Praesent augue mauris, dictum
              a commodo
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="featured-player--content">
            <h4>Bartes</h4>
            <img src="https://s1.bukalapak.com/img/6054029304/w-1000/TR.jpg.webp" />
            <p>
              Phasellus ultrices nulla et ipsum hendrerit scelerisque. Nam
              fermentum ultricies mi vel pretium. Praesent augue mauris, dictum
              a commodo
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="featured-player--content">
            <h4>Scholes</h4>
            <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/10/29/08/Scholes.jpg" />
            <p>
              Phasellus ultrices nulla et ipsum hendrerit scelerisque. Nam
              fermentum ultricies mi vel pretium. Praesent augue mauris, dictum
              a commodo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPlayer;
