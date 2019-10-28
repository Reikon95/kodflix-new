import React from 'react';
import logo from './logo.svg';
import './App.css';
import bttf from './bttf.jpg';

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
        <h2 className="tvshow">Black Mirror</h2>
        <h2 className="tvshow">Breaking Bad</h2>
        <h2 className="tvshow">Death Note</h2>
        <h2 className="tvshow">Game of Thrones</h2>
        <h2 className="tvshow">The Walking Dead</h2>
        <h2 className="tvshow">The Wire</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
