import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getCovers from '../coversGet';
import './Details.css'

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
    if (this.state.cover === undefined) {
      return <Redirect to='/not-found'/>;
    }
    else {return (
      <div className="Details">
      <div className="content">
        <h1>{this.state.cover.name}</h1>
        <p>{this.state.cover.details}</p>
        <img src={this.state.cover.logo} alt={this.state.cover.name + ' logo'} />
      </div>
      <Link to='/'><p>Take me back!</p></Link>
      </div>
    );}    
  }
}

