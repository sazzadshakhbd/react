import React, {Component} from 'react';
import ReactDom from 'react-dom';

class FindDomeNode extends Component {
  changeImg() {
    
    var x = document.getElementById('myImg')

    ReactDom.findDOMNode(x).src = 'https://cdn.pixabay.com/photo/2021/07/16/17/01/vicuna-6471374_960_720.jpg';
  }
  render() {
    return(
      <div>
        <button onClick={this.changeImg}>Change Image</button>
        <br></br>
        <br></br>
        <img id="myImg" src="https://cdn.pixabay.com/photo/2020/02/05/09/57/namibia-4820682_960_720.jpg"></img>
      </div>
    )
  }
}

export default FindDomeNode