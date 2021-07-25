import React from 'react';
function Hello(props) {
  function clickMe(s) {
    alert(s)
  }
  return(
    <button onClick={clickMe.bind(this, 'Hi! I am Functional Component')}>Click me Functional</button>
  )
}
export default Hello;