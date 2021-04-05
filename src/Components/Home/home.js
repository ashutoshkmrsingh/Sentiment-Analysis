import React, { Component } from "react";
import "./home.css";
import Title from '../Title/title';
import Contact from '../Contact/contact';
import Editor from '../Editor/editor';
import Button from '../Button/button';
import Dropdown from '../Dropdown/dropdown';

class Home extends Component {
  state = {
    result: false,
  };

  viewResult = (params) => {
    console.log("view result");
  };

  render() {
    return (
      <React.Fragment>
        <Title />
        <Contact />
        <Editor />
        <Dropdown />
        <a href='./result'>
          <Button text="check now" function={() => this.viewResult()} />
        </a>
      </React.Fragment>
    );
  }
}

export default Home;
