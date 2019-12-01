import React from "react";

import logo from "../../assets/img/logo.png";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer--wrapper mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img src={logo} style={{ maxWidth: 70 }} />
          </div>
          <div className="col-md-4">
            <div className="footer--content">
              <h5>About Us</h5>
              <p className="mt-4">
                Morbi accumsan posuere fringilla. Nullam fermentum ex vel varius
                convallis. Nunc ultricies pellentesque magna sed vestibulum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                nec euismod ex
              </p>
              <a href="#!">Read more..</a>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="footer--content">
              <h5>Follow Us</h5>
              <ul>
                <li>
                  <a href="#!">
                    <i
                      className="fa fa-facebook-official"
                      aria-hidden="true"
                    ></i>
                    <span>Starup Makassar</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i
                      className="fa fa-twitter-square"
                      aria-hidden="true"
                    ></i>
                    <span>@startup_makassar</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
