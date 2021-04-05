import React from "react";
import "./notify.css";

const Notify = (props) => {
  return (
    <p className="notify" style={
        { fontSize : props.fontsize }
    }>
      {props.text}{" "}
      <a href={props.link} target="__blank">
        {props.link}
      </a>
    </p>
  );
};

export default Notify;
