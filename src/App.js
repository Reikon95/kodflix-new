import React from 'react';
import './App.css';
import bttf from './bttf.jpg';
import got from './Images/GOT.jpg';
import breakbad from './Images/BreakingBad.jpg';
import blackmirror from './Images/Black Mirror.png';
import wire from './Images/thewire.jpg';
import walkingDead from './Images/Walking Dead.jpg';
import strange from './Images/strangerthings.jpg';
import Movie from './Movie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Movie image={bttf}/>
        <div className="container">
          <div className="tvshow">
        <img src={got} alt="Game of Thrones"/>
        <div className="overlay">
          <h1>Game of Thrones</h1>
        </div>
        </div>
        <div className="tvshow">
        <img src={breakbad} alt="Breaking Bad"/>
        <div className="overlay">
          <h1>Breaking Bad</h1>
        </div>
        </div>
        <div className="tvshow">
        <img src={blackmirror} alt="Black Mirror"/>
        <div className="overlay">
          <h1>Black Mirror</h1>
        </div>
        </div>
        <div className="tvshow">
        <img src={wire} alt="The Wire"/>
        <div className="overlay">
          <h1>The Wire</h1>
        </div>
        </div>
        <div className="tvshow">
        <img src={walkingDead} alt="The Walking Dead"/>
        <div className="overlay">
          <h1>The Walking Dead</h1>
        </div>
        </div>
        <div className="tvshow">
        <img src={strange} alt="Stranger Things"/>
        <div className="overlay">
          <h1>Stranger Things</h1>
        </div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
