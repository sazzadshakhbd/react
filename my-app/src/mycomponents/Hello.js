import React from "react";

function Hello(props) {
  function doThis() {
    alert("This is the button which is used in functional component");
  }
  return (
    <div className="abc">
      <button onClick={doThis}>Click Me</button>
      <h1>
        Hello! My name is {props.name}. I am {props.age} years old. I live in{" "}
        {props.living}.
      </h1>
    </div>
  );
}

export default Hello;
