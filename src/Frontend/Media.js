import React from 'react';
import { Link } from 'react-router-dom';
export default function Media(props) {
    return (
      <Link to={`/${props.id}`} className="tvshow">
          <img src={props.logo} alt={props.name}/>
          <div className="overlay">
                <p>{props.name}</p>
              </div>
      </Link>
    );
  }