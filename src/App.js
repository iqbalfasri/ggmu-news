import React from "react";

import Navbar from "./components/navbar/navbar";
import Subnavbar from './components/navbar/subNavbar';

import HighLight from './components/content/highlight'

function App() {
  return (
    <>
      <Navbar />
      <Subnavbar />
      <HighLight />
    </>
  );
}

export default App;
