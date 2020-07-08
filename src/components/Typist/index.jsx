import React from "react";
import Typed from "react-typed";

function Typist(props) {
  return (
    <Typed
      strings={props.sentences}
      typeSpeed={props.typeSpeed}
      backSpeed={props.backSpeed}
      loop
      style={props.style}
    ></Typed>
  );
}
export default Typist;
