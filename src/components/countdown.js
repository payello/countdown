import React, { Component } from "react";
import PropTypes from "prop-types";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    endDate = endDate.split("-");
    let newDate = endDate[1]+"/"+endDate[0]+"/"+endDate[2];

    new Date(newDate).getTime()

    let diff = (new Date(newDate).getTime() / 1000) - Date.parse(new Date()) / 1000;

    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (diff >= 365.25 * 86400) {
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }

    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }

    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }

    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }

    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  render() {
    const countDown = this.state;
    return (
      <div className="countDown">
        <strong>{countDown.days} </strong>
        <span>{countDown.days === 1 ? "Day" : "Days"} - </span>
        <strong>{countDown.hours} </strong>
        <strong> {countDown.hours === 1 ? "Hour" : "Hours"} </strong>
        <strong>{countDown.min} </strong>
        <strong> {countDown.min === 1 ? "Minute" : "Minutes"} </strong>
        <strong>{countDown.sec} </strong>
        <strong> {countDown.sec === 1 ? "Second" : "Seconds"} </strong>
      </div>
    );
  }
}

Countdown.propTypes = {
  date: PropTypes.string.isRequired
};

Countdown.defaultProps = {
  date: new Date()
};

export default Countdown;
