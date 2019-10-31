import React from 'react';
import './App.css';
import bttf from './bttf.jpg';
import got from './Images/GOT.jpg';
import breakbad from './Images/BreakingBad.jpg';
import blackmirror from './Images/Black Mirror.png';
import wire from './Images/thewire.jpg';
import walkingDead from './Images/Walking Dead.jpg';
import strange from './Images/strangerthings.jpg';
import Media from './Media';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <div className="container">
          <Media name="Game of Thrones" logo={got}/>
          <Media name="Breaking Bad" logo={breakbad}/>
          <Media name="Black Mirror" logo={blackmirror}/>
        </div>
        <div className="container">
          <Media name="The Wire" logo={wire}/>
          <Media name="The Walking Dead" logo={walkingDead}/>
          <Media name="Stranger Things" logo={strange}/>
        </div>
    </div>
  );
}

export default App;
