import got from './Images/GOT.jpg';
import breakbad from './Images/BreakingBad.jpg';
import blackmirror from './Images/Black Mirror.png';
import wire from './Images/thewire.jpg';
import walkingDead from './Images/Walking Dead.jpg';
import strange from './Images/strangerthings.jpg';
export default function getCovers() {
    return [
        {id: "gameOfThrones", name: "Game Of Thrones", logo: got, details: 'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.'},
        {id: "breakingBad", name: "Breaking Bad", logo: breakbad, details: 'Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.'},
        {id: "blackMirror", name: "Black Mirror", logo: blackmirror, details: 'An anthology series that revolves around a group of people\'s personal lives and how technology manipulates their behaviour.'},
        {id: "theWire", name: "The Wire", logo: wire, details: 'In the city of Baltimore, Detective James McNulty and his team investigate crimes and try their best to solve the bridge that exists between the drug kingpins and the law enforcement agencies.'},
        {id: "theWalkingDead", name: "The Walking Dead", logo: walkingDead, details: 'A group of survivors led by police officer Rick Grimes travel in search of a safe and secure home after a zombie apocalypse spreads across the USA.'},
        {id: "strangerThings", name: "Stranger Things", logo: strange, details: 'When Joyce\'s 12-year-old son, Will, goes missing, she launches a terrifying investigation into his disappearance with local authorities. As they search for answers, they unravel a series of extraordinary mysteries involving secret government experiments, unnerving supernatural forces, and a very unusual little girl.'}
    ];
}