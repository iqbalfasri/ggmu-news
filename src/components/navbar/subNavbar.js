import React from "react";
import "./subNavbar.css";

function SubNavbar() {
  return (
    <div className="container">
      <div className="subnav--wrapper">
        <div className="subnav--list">
          <div className="subnav--list-category">
            <ul>
              <li>
                <a className="category--active" href="#!">
                  News
                </a>
              </li>
              <li>
                <a href="#!">Info</a>
              </li>
              <li>
                <a href="#!">Tools</a>
              </li>
              <li>
                <a href="#!">Tips &amp; Trik</a>
              </li>
              <li>
                <a href="#!">Interview</a>
              </li>
              <li>
                <a href="#!">Technology</a>
              </li>
            </ul>
          </div>
          <div className="subnav--search">
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubNavbar;
