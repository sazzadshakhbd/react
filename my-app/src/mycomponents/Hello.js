import React from "react";

function Hello(props) {
  return (
    <div className="abc">
      <h1>
        Hello! My name is {props.name}. I am {props.age} years old. I live in{" "}
        {props.living}.
      </h1>
    </div>
  );
}

export default Hello;
