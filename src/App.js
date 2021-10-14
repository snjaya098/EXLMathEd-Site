import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Register from './pages/register';
import Appointment from './pages/appointment';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/appointment' component={Appointment} exact />
        <Route path='/register' component={Register} exact />
      </Switch>
    </Router>
  );
}

export default App;
