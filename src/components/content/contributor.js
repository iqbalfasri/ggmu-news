import React from "react";

import "./contributor.css";

function Contributor() {
  return (
    <div className="container mb-5 mt-5">
      <div className="contributor--title-wrapper">
        <h3 className="contributor--title">Contributor</h3>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="contributor--content">
            <div className="contributor--list-content article">
              <h6>
                <i className="fa fa-book" aria-hidden="true">
                  &nbsp;&nbsp;
                </i>
                Submit Article
              </h6>
            </div>
            <div className="contributor--list-content startup">
              <h6>
                <i className="fa fa-paper-plane" aria-hidden="true">
                  &nbsp;&nbsp;
                </i>
                Submit Sartup
              </h6>
            </div>
            <div className="contributor--list-content event">
              <h6>
                <i className="fa fa-calendar" aria-hidden="true">
                  &nbsp;&nbsp;
                </i>
                Submit Event
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contributor;
