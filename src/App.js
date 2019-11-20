import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './gallery';
import Details from './Details';
import NotFound from './Error404';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Switch>
          <Route exact path='/' component={Gallery}/>
          <Route exact path='/:details' component={Details}/>
          <Route exact path='/not-found' component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
