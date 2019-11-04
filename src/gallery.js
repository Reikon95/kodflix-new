import React from 'react';
import Media from './Media';
import got from './Images/GOT.jpg';
import breakbad from './Images/BreakingBad.jpg';
import blackmirror from './Images/Black Mirror.png';
import wire from './Images/thewire.jpg';
import walkingDead from './Images/Walking Dead.jpg';
import strange from './Images/strangerthings.jpg';
export default function Covers() {
    return (
        <>
         <div className="container">
          <Media id="gameOfThrones" name="Game Of Thrones" logo={got}/>
          <Media id="breakingBad" name="Breaking Bad" logo={breakbad}/>
          <Media id="blackMirror" name="Black Mirror" logo={blackmirror}/>
          <Media id="theWire" name="The Wire" logo={wire}/>
          <Media id="theWalkingDead" name="The Walking Dead" logo={walkingDead}/>
          <Media id="strangerThings" name="Stranger Things" logo={strange}/>
        </div>
        </>
    );
}