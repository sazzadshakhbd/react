import React, {Component} from 'react';
import ReactDom from 'react-dom';

class RenderHydrateMethod extends Component {
  myFun() {
    var container = document.getElementById('myId');
    var element = <h2>Sazzad</h2>;
    var callback = function() {
      alert('hi!');
    };
    ReactDom.hydrate(element, container, callback)
  }
  render(){
    return(
      <div>
        <button onClick={this.myFun}>Change Text</button>
        <h1 id="myId">Hi! My name is Sazzad</h1>
      </div>
    )
  }
}
export default RenderHydrateMethod