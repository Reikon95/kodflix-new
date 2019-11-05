import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './gallery';
import Details from './Details';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Route exact path='/' component={Gallery}/>
        <Route exact path='/:details' component={Details}/>
      </div>
    </Router>
  );
}

export default App;
