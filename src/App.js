import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './views/index';
import Shows from './views/shows';

import './App.css';

function App() {
  return (
    <Router>
        <Route path="/" exact component={Index}/>
        <Route path="/shows" exact component={Shows}/>
    </Router>
  );
}

export default App;
