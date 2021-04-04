import React, { Component } from 'react';
import './result.css';
import Title from './Components/Title/title';
import Contact from './Components/Contact/contact';
import Button from './Components/Button/button';
import Textbox from './Components/Textbox/textbox';
import Notify from './Components/Notify/notify';
import PieChart from './Components/Piechart/piechart';
import BarChart from './Components/Barchart/barchart';

class App extends Component {
  state = {
    result: false,
    input_text: 'I am Ashutosh Singh',
    score: {
        positive: 73,
        negative: 27
    }
  }

  viewResult = (params) => {
    console.log('IN result');
  }

  render() {
    return (
      <React.Fragment>
        <Title />
        <Contact />
        <Textbox input={ this.state.input_text }/>
        <PieChart positive={ this.state.score.positive } negative={ this.state.score.negative }/>
        <Notify text='Chart is prepared using' link='https://react-google-charts.com/' />
        <BarChart />
        <Button text='back' function={ 
          () => this.viewResult()
         }/>
      </React.Fragment>
    );
  }
}

export default App;
