import React from "react";
import Countdown from "../src/components/countdown";
import Footer from "../src/components/footer";
import "./App.css";
import percy from "../src/images/percy.jpg"
import archie from "../src/images/archie.jpg"
import isabelle from "../src/images/isabelle.png"
import tom from "../src/images/tom.png"
import francesca from "../src/images/fran.JPG"
import Age from "../src/components/age"

function App() {
  let date = new Date();
  let currentYear = date.getFullYear()
  let data = {
    0: [
      { name: 'Archie', birthday: '2018-11-17T08:00:00.889Z', birthYear: 2018, img: archie, date: `${currentYear}-11-17` }
    ],
    1: [
      { name: 'Francesca', birthday: '2016-01-13T08:00:00.889Z', birthYear: 2016, img: francesca, date: `${currentYear}-01-13` }
    ],
    2: [
      { name: 'Isabelle', birthday: '2010-12-06T08:00:00.889Z', birthYear: 2010, img: isabelle, date: `${currentYear}-12-06` }
    ],
    3: [
      { name: 'Percy', birthday: '2017-07-29T08:00:00.889Z', birthYear: 2017, img: percy, date: `${currentYear}-07-29` }
    ],
    4: [
      { name: 'Tom', birthday: '2013-06-03T08:00:00.889Z', birthYear: 2013, img: tom, date: `${currentYear}-06-03` }
    ]
  }

  function formatDate(string) {
    let date = new Date(string);
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];

    let month = months[date.getMonth()];
    let year = date.getDate();

    return `${month} ${year}`;
  }

  function nextBirthday (date) {
    let today = new Date();
    let thisMonth = today.getMonth() + 1
    let thisDate = today.getDate();

    let birthDate = new Date(date);
    let birthMonth = birthDate.getMonth() + 1;
    let day = birthDate.getDate();

    let thisYear = today.getFullYear();
    let nextYear = today.getFullYear() + 1;
  
    if ( birthMonth < thisMonth ) {
      return day + '-' + birthMonth + '-' + nextYear;
    }

    if (birthMonth === thisMonth) {
      if (thisDate < day) {
        return day + '-' + birthMonth + '-' + thisYear;
      }

      if (thisDate === day) {
        return day + '-' + birthMonth + '-' + thisYear;
      }

      if (thisDate > day) {
        return day + '-' + birthMonth + '-' + nextYear;
      }
    }

    if (birthMonth > thisMonth) {
      return day + '-' + birthMonth + '-' + nextYear;
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>How long until I am...?</h1>
      {Object.keys(data).map((item, index) => 
      <div key={ data[item][0].name }>
        <h3>{ data[item][0].name }</h3>
        <img src={ data[item][0].img } alt={data[item][0].name}/>
        <p>Birthday is on <strong>{ formatDate(data[item][0].birthday) }</strong></p>
        {`Countdown until ${data[item][0].name}'s birthday - `}<Countdown date={nextBirthday(data[item][0].date)} />
        {`${data[item][0].name} is `}<Age date={data[item][0].birthday} />
      </div>
      )}
      </header>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <h3>Archie's birthday</h3>
    //     <img src={ archie } className="App-logo" alt="logo" />
    //     <p>November 17</p>
    //     Countdown until Archie's birthday - <Countdown date="2020-11-17T08:00:00.889Z" /> 
    //     Archie is <Age date="2018-11-17T08:00:00.889Z"/>

    //     <h3>Francesca's birthday</h3>
    //     <img src={ francesca } className="App-logo" alt="logo" />
    //     <p>January 13</p>
    //     Countdown until Francesca's birthday - <Countdown date="2020-01-13T08:00:00.889Z" /> 
    //     Francesca is <Age date="2016-01-13T08:00:00.889Z"/>

    //     <h3>Isabelle's birthday</h3>
    //     <img src={ isabelle } className="App-logo" alt="logo" />
    //     <p>December 06</p>
    //     Countdown until Isabelle's birthday - <Countdown date="2020-12-06T08:00:00.889Z" /> 
    //     Isabelle is <Age date="2010-12-06T08:00:00.889Z"/>

    //     <h3>Percy's birthday</h3>
    //     <img src={ percy } className="App-logo" alt="logo" />
    //     <p>July 30</p>
    //     Countdown until Percy's birthday - <Countdown date="2020-07-29T08:00:00.889Z" />
    //     Percy is <Age date="2017-07-29T08:00:00.889Z"/>

    //     <h3>Tom's birthday</h3>
    //     <img src={ tom } className="App-logo" alt="logo" />
    //     <p>December 06</p>
    //     Countdown until Tom's birthday - <Countdown date="2020-06-03T08:00:00.889Z" /> 
    //     Tom is <Age date="2013-06-03T08:00:00.889Z"/>

    //   </header>
    //   {/* <Darkmode /m > */}
    //   <Footer />
    // </div>
  );
}

export default App;
