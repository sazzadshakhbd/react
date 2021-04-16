import React from "react";

function Hello(props) {
  function doThis(q) {
    alert(q);
  }
  return (
    <div className="abc">
      <button
        onClick={doThis.bind(
          this,
          "This is the button which is used in functional component"
        )}
      >
        Click Me
      </button>
      <h1>
        Hello! My name is {props.name}. I am {props.age} years old. I live in{" "}
        {props.living}.
      </h1>
    </div>
  );
}

export default Hello;
