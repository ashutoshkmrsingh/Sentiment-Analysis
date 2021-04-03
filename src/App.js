import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title/title';
import Contact from './Components/Contact/contact';
import Editor from './Components/Editor/editor';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Title />
        <Contact />
        <Editor />
      </React.Fragment>
    );
  }
}

export default App;
