import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title/title';
import Contact from './Components/Contact/contact';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Title />
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
