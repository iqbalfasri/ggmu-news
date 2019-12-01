import React from "react";

import "./highlight.css";

function HighLight() {
  const IMG_LARGE =
    "https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-md-6 pr-1">
          <div className="highlight--content">
            <div className="content--thumbnail">
              <img src={IMG_LARGE} />
            </div>
            <div className="content--info">
              <h1>Donec at elit lacus. Etiam sollicitudin nisi libero</h1>
              <p>15 Desember 2014</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="highlight--small">
            <div className="row mb-2">
              <div className="col-md-6 pl-1">
                <div className="highlight--content">
                  <div className="content--thumbnail">
                    <img src="https://images.pexels.com/photos/3184163/pexels-photo-3184163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                  <div className="content--info">
                    <h1 className="title--small">Donec elit lacus...</h1>
                    <p>15 Desember 2014</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pl-1">
                <div className="highlight--content">
                  <div className="content--thumbnail">
                    <img src='https://images.pexels.com/photos/3184163/pexels-photo-3184163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                  </div>
                  <div className="content--info">
                    <h1 className="title--small">Donec elit lacus...</h1>
                    <p>15 Desember 2014</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-md-6 pl-1">
                <div className="highlight--content">
                  <div className="content--thumbnail">
                    <img src='https://images.pexels.com/photos/3184163/pexels-photo-3184163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                  </div>
                  <div className="content--info">
                    <h1 className="title--small">Donec elit lacus...</h1>
                    <p>15 Desember 2014</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pl-1">
                <div className="highlight--content">
                  <div className="content--thumbnail">
                    <img src='https://images.pexels.com/photos/3184163/pexels-photo-3184163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                  </div>
                  <div className="content--info">
                    <h1 className="title--small">Donec elit lacus...</h1>
                    <p>15 Desember 2014</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighLight;
