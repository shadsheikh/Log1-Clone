import React from "react";
import Navbar from "./components/navbar";
import MainMenu from "./components/MainMenu";

import ViewHeading from "./components/ViewHeading";
const App = () => {
  return (
    <>
      <MainMenu />
      <Navbar />
      <div className="module">
        <ViewHeading />
      </div>
    </>
  );
};

export default App;
