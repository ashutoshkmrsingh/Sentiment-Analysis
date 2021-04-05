import React from "react";
import "./error.css";
import Title from "../Title/title";
import Contact from "../Contact/contact";
import Button from "../Button/button";
import Notify from "../Notify/notify";

const Error = () => {
  return (
    <React.Fragment>
      <Title />
      <Contact />
      <Notify text="Page Not Found" fontsize="18vh"/>
      <a href="/">
        <Button text="back" function={() => this.viewResult()} />
      </a>
    </React.Fragment>
  );
};

export default Error;
