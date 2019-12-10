import React from "react";
import image from "../src/IMG_3041.JPG";
import Countdown from "../src/components/countdown";
import Footer from "../src/components/footer";
import Darkmode from "../src/components/darkMode";
import "./App.css";
import percy from "../src/images/percy.jpg"
import archie from "../src/images/archie.jpg"
import isabelle from "../src/images/isabelle.png"
import tom from "../src/images/tom.png"
import francesca from "../src/images/fran.JPG"
import Age from "../src/components/age"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Archie's birthday</h3>
        <img src={ archie } className="App-logo" alt="logo" />
        <p>November 17</p>
        Countdown until Archie's birthday - <Countdown date="2020-11-17T08:00:00.889Z" /> 
        Archie is <Age date="2018-11-17T08:00:00.889Z"/>

        <h3>Francesca's birthday</h3>
        <img src={ francesca } className="App-logo" alt="logo" />
        <p>January 13</p>
        Countdown until Francesca's birthday - <Countdown date="2020-01-13T08:00:00.889Z" /> 
        Francesca is <Age date="2016-01-13T08:00:00.889Z"/>

        <h3>Isabelle's birthday</h3>
        <img src={ isabelle } className="App-logo" alt="logo" />
        <p>December 06</p>
        Countdown until Isabelle's birthday - <Countdown date="2020-12-06T08:00:00.889Z" /> 
        Isabelle is <Age date="2010-12-06T08:00:00.889Z"/>

        <h3>Percy's birthday</h3>
        <img src={ percy } className="App-logo" alt="logo" />
        <p>July 30</p>
        Countdown until Percy's birthday - <Countdown date="2020-07-29T08:00:00.889Z" />
        Percy is <Age date="2017-07-29T08:00:00.889Z"/>

        <h3>Tom's birthday</h3>
        <img src={ tom } className="App-logo" alt="logo" />
        <p>December 06</p>
        Countdown until Tom's birthday - <Countdown date="2020-06-03T08:00:00.889Z" /> 
        Tom is <Age date="2013-06-03T08:00:00.889Z"/>

      </header>
      {/* <Darkmode /m > */}
      <Footer />
    </div>
  );
}

export default App;
