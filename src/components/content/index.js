import React from "react";

import HighLight from "./highlight";
import Events from './events';
import FeaturedPlayer from './featuredPlayer';

export default () => {
  return (
    <>
      <HighLight />
      <Events />
      <FeaturedPlayer />
    </>
  );
};