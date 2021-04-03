import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title/title';
import Contact from './Components/Contact/contact';
import Editor from './Components/Editor/editor';
import Button from './Components/Button/button'

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
        <Button text='check now' function={ 
          () => this.viewResult()
         }/>
      </React.Fragment>
    );
  }
}

export default App;
