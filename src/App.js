import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch >
          <Route path="/" exact={true} component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
