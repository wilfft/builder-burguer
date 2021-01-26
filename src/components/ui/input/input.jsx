import React from "react";
import "./input.css";
const input = (props) => {
  let inputElement = null;
  let validElement = null;
  if (!props.valid && props.touched) {
    validElement = "invalid";
  }
  // console.log(props.inputType);
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={"inputElement " + validElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textArea":
      inputElement = (
        <textarea
          className={"inputElement " + validElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={"inputElement " + validElement}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={"inputElement " + validElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className="input">
      <label className="formlabel"> {props.label}</label> {inputElement}
    </div>
  );
};

export default input;
