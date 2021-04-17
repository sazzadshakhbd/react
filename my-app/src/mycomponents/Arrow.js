import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ArrowBtn = (a) => {
  return alert(a);
};

const Arrow = () => {
  return (
    <div>
      <button
        onClick={ArrowBtn.bind(this, "I am Arrow Function")}
        className="btn btn-info m-5"
      >
        Click Me
      </button>
    </div>
  );
};

export default Arrow;
