import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Login from '../src/components/Login';
import Register from '../src/components/Register';

import './App.css';
import '../src/sass/index.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </Router>

  );
}

export default App;
