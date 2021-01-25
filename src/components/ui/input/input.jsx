import React from "react";

const input = (props) => {
  let inputElement = null;

  props.inputType == "input" ? (
    (inputElement = <input type="text"> </input>)
  ) : (
    <p> nao tem input</p>
  );

  return <inputElement />;
};

export default input;
