import React, { Component } from 'react';
import './result.css';
import Title from './Components/Title/title';
import Contact from './Components/Contact/contact';
import Button from './Components/Button/button';
import Textbox from './Components/Textbox/textbox';
import Notify from './Components/Notify/notify';
import PieChart from './Components/Piechart/piechart';

class App extends Component {
  state = {
    result: false,
    input_text: 'I am Ashutosh Singh',
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
        <PieChart />
        <Notify text='Chart is prepared using' link='https://react-google-charts.com/' />
        <Button text='back' function={ 
          () => this.viewResult()
         }/>
      </React.Fragment>
    );
  }
}

export default App;
