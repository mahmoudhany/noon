import React from 'react';
import { Route, Switch } from 'react-router'

import './App.css';
import Signup from './Components/Signup/Signup'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
