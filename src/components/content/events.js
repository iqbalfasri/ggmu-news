import React from "react";

import "./events.css";

function Events() {
  return (
    <div className="container mb-5 mt-5">
      <div className="events--title-wrapper">
        <h3 className="events--title">Upcoming Events</h3>
        <h5 className="events--sub-title">View All</h5>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="events--content">
            <h4>Donec at elit lacus Etiam...</h4>
            <img src="https://images.pexels.com/photos/3014013/pexels-photo-3014013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <p>
              Phasellus ultrices nulla et ipsum hendrerit scelerisque. Nam
              fermentum ultricies mi vel pretium. Praesent augue mauris, dictum
              a commodo
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="events--content">
            <h4>sollicitudin nisi libero...</h4>
            <img src="https://images.pexels.com/photos/3184163/pexels-photo-3184163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <p>
              Phasellus ultrices nulla et ipsum hendrerit scelerisque. Nam
              fermentum ultricies mi vel pretium. Praesent augue mauris, dictum
              a commodo
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="events--content">
            <h4>at elementum sem posuere...</h4>
            <img src="https://images.pexels.com/photos/3098734/pexels-photo-3098734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
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

export default Events;
