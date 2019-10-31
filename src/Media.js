import React from 'react'
export default function Media(props) {
    return (
      <div className="tvshow">
          <img src={props.logo} alt={props.name}/>
          <div className="overlay">
                <h1>{props.name}</h1>
              </div>
      </div>
    );
  }