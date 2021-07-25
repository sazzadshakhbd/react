import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Card(props) {
  return(
    <div className="container">
      <div className="row">
        <div className="mb-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Name: {props.titleName}</h5>
              <p className="card-text">{props.cardText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;