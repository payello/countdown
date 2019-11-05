import React from "react";
import image from "../public/IMG_3041.JPG";

import Countdown from "../src/components/countdown";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <h1>Countdown for Pellie</h1>
        <Countdown date="2019-11-30T12:00:00.889Z" />
      </header>
    </div>
  );
}

export default App;
