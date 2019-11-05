import React from 'react';
import { Link } from 'react-router-dom';

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      welcomeMessage: 'Check back later, website under construction!'
    };
  }
  render() {
    return (
      <>
      <div><h1>{this.state.welcomeMessage}</h1></div>
      <Link to='/'><p>Take me back!</p></Link>
      </>
    );    
  }
}
