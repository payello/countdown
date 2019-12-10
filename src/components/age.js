import React, { Component } from "react";

class Age extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 0,
    };
  }

  
  componentDidMount() {
    const date = this.calculateAge(this.props.date);
    date ? this.setState(date) : this.stop();
  }
  
  calculateAge(date) {
    let diff = (Date.now() - Date.parse(date)) / 1000;

    const age = {
      years: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (diff >= 365.25 * 86400) {
      age.years = Math.floor(diff / (365.25 * 86400));
      diff -= age.years * 365.25 * 86400;
    }
    console.log(age);
    return age;
  }

  render() {
    const age = this.state;
    return (
      <div className="countDown">
      <strong>{age.years} </strong>   
      </div>
    )
  }
}

export default Age;
