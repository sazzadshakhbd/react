import React from 'react';
function Hello(props) {
  function clickMe() {
    alert('Click me from functional Component')
  }
  return(
    <button onClick={clickMe}>Click me from functional Component</button>
  )
}
export default Hello;