import React from 'react';
import Media from './Media';
import got from './Images/GOT.jpg';
import breakbad from './Images/BreakingBad.jpg';
import blackmirror from './Images/Black Mirror.png';
import wire from './Images/thewire.jpg';
import walkingDead from './Images/Walking Dead.jpg';
import strange from './Images/strangerthings.jpg';
export default function getCovers() {
    return [
        {id: "gameOfThrones", name: "Game Of Thrones", logo: got},
        {id: "breakingBad", name: "Breaking Bad", logo: breakbad},
        {id: "blackMirror", name: "Black Mirror", logo: blackmirror},
        {id: "theWire", name: "The Wire", logo: wire},
        {id: "theWalkingDead", name: "The Walking Dead", logo: walkingDead},
        {id: "strangerThings", name: "Stranger Things", logo: strange}
    ];
}