import React from 'react';
import { Link } from 'react-router-dom';
import getCovers from './coversGet';

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      welcomeMessage: 'Check back later, website under construction!',
      cover: {}
    };
  }
  componentDidMount() {
    let mediaId = this.props.match.params.details;
    let cover = getCovers().find(function(cover) 
      {return cover.id === mediaId;});
    this.setState({
      cover: cover
    });
    }
  render() {
    return (
      <>
      <div><h1>{this.state.cover.name}</h1></div>
      <Link to='/'><p>Take me back!</p></Link>
      </>
    );    
  }
}
