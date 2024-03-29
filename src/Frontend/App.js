import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './gallery';
import Details from './DetailsFolder/Details.js';
import NotFound from './Error404';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Gallery}/>
          <Route exact path='/not-found' component={NotFound}/>
          <Route exact path='/:details' component={Details}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



