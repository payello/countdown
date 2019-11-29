import React from "react";
import image from "../src/IMG_3041.JPG";
import Countdown from "../src/components/countdown";
import Footer from "../src/components/footer";
import Darkmode from "../src/components/darkMode";
import "./App.css";
import percy from "../src/images/percy.jpg"
import archie from "../src/images/archie.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Percy's birthday</h3>
        <img src={ percy } className="App-logo" alt="logo" />
        <Countdown date="2020-07-29T08:00:00.889Z" />

        <h3>Archie's birthday</h3>
        <img src={ archie } className="App-logo" alt="logo" />
        <Countdown date="2020-11-17T08:00:00.889Z" />
      </header>
      {/* <Darkmode /m > */}
      <Footer />
    </div>
  );
}

export default App;
