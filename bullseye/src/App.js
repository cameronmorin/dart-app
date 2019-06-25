import React from 'react';
import './App.css';
import Loading from './Loading';
import Start from './Start';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = '/' component = {Loading}/>
          <Route path = '/start' component = {Start}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
