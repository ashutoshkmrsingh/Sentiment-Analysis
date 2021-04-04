import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title/title';
import Contact from './Components/Contact/contact';
import Editor from './Components/Editor/editor';
import Button from './Components/Button/button';
import Dropdown from './Components/Dropdown/dropdown';

class App extends Component {
  state = {

  }

  viewResult = (params) => {
    console.log('view result');
  }

  render() {
    return (
      <React.Fragment>
        <Title />
        <Contact />
        <Editor />
        <Dropdown />
        <Button text='check now' function={ 
          () => this.viewResult()
         }/>
      </React.Fragment>
    );
  }
}

export default App;
