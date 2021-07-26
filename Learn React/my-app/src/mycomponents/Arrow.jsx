import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const alertMe = (a) => {
  alert(a)
}
const Arrow = () => {
  return(
    <button onClick={alertMe.bind(this, 'This is a functional alert box')} className="m-5 btn btn-primary">Click me</button>
  )
}

export default Arrow;