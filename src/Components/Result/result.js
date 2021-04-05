import React, { Component } from "react";
import "./result.css";
import Title from "../Title/title";
import Contact from "../Contact/contact";
import Button from "../Button/button";
import Textbox from "../Textbox/textbox";
import Notify from "../Notify/notify";
import PieChart from "../Piechart/piechart";
import BarChart from "../Barchart/barchart";

class App extends Component {
  state = {
    result: false,
    input_text: "I am Ashutosh Singh",
    score: {
      positive: 73,
      negative: 27,
    },
  };

  viewResult = (params) => {
    console.log("IN result");
  };

  render() {
    return (
      <React.Fragment>
        <Title />
        <Contact />
        <Textbox input={this.state.input_text} />
        <PieChart
          positive={this.state.score.positive}
          negative={this.state.score.negative}
        />
        <Notify
          text="Chart is prepared using"
          link="https://react-google-charts.com/"
        />
        <BarChart />
        <a href='/'>
          <Button text="back" function={() => this.viewResult()} />
        </a>
      </React.Fragment>
    );
  }
}

export default App;
