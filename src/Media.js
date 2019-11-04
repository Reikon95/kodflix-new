import React from 'react';
import { Link } from 'react-router-dom';
export default function Media(props) {
    return (
      <Link to='/details' className="tvshow">
          <img src={props.logo} alt={props.name}/>
          <div className="overlay">
                <h1>{props.name}</h1>
              </div>
      </Link>
    );
  }