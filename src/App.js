import React from 'react';
import logo from './logo.svg';
import './App.css';
import bttf from './bttf.jpg';
import got from './Images/GOT.jpg';
import breakbad from './Images/BreakingBad.jpg';
import blackmirror from './Images/Black Mirror.png';
import wire from './Images/thewire.jpg';
import walkingDead from './Images/Walking Dead.jpg';
import strange from './Images/strangerthings.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={bttf} alt='bttf logo' />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>React test.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="container">
        <img src={got} className="tvshow" alt="Game of Thrones"/>
        <img src={breakbad} className="tvshow" alt="Breaking Bad"/>
        <img src={blackmirror} className="tvshow" alt="Black Mirror"/>
        <img src={wire} className="tvshow" alt="The Wire"/>
        <img src={walkingDead} className="tvshow" alt="The Walking Dead"/>
        <img src={strange} className="tvshow" alt="Stranger Things"/>
        </div>
      </header>
    </div>
  );
}

export default App;
