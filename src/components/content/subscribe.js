import React from "react";

import "./subscribe.css";

function Subscribe() {
  return (
    <div className="container mb-5 mt-5">
      <div className="subs--title-wrapper">
        <h3 className="subs--title">Subscribe</h3>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="subs--content">
            <div className="subs--input-wrapper">
              <input type="text" placeholder="EMAIL ADDRESS" />
              <i color="#909090" className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
