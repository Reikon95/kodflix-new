import React, {component} from 'react';
import Media from './Media';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Details() {
    return (
        <>
        <div><h1>Check back later!</h1></div>
        <Link to='/'><p>Take me back!</p></Link>
        </>
      );
}