import React from "react";

import HighLight from "./highlight";
import Events from "./events";
import FeaturedPlayer from "./featuredPlayer";
import News from "./news";
import Contributor from "./contributor";
import Subsribe from './subscribe';

export default () => {
  return (
    <>
      <HighLight />
      <Events />
      <FeaturedPlayer />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8">
            <News />
          </div>
          <div className="col-md-4">
            <Contributor />
            <Subsribe />
          </div>
        </div>
      </div>
    </>
  );
};
