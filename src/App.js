import React from "react";

import Navbar from "./components/navbar/navbar";
import Subnavbar from "./components/navbar/subNavbar";

import Content from "./components/content";

import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Subnavbar />
      <Content />
      <Footer />
    </>
  );
}

export default App;
