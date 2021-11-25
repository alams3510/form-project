import './App.css';
import React from 'react';

import Navbar from './Navbar';
import Movie from './Movie';
import Home from './Home';
import Entry from './entry';

import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      <Route path='/entry' exact component={Entry} />
      <Route path='/movie' exact component={Movie} />

    </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
