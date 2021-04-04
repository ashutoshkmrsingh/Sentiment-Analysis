import React, { Component } from 'react';
import './result.css';
import Title from './Components/Title/title';
import Contact from './Components/Contact/contact';
import Button from './Components/Button/button';

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
        <Button text='back' function={ 
          () => this.viewResult()
         }/>
      </React.Fragment>
    );
  }
}

export default App;
