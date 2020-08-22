import React from 'react'
import HomePage from './components/HomePage'
import R1Signup from './components/R1Signup'
import R1Login from './components/R1Login'
import { Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './utilities/PrivateRoute'
import axiosWithAuth from './utilities/apiUtilities'
import './App.css'

function App() {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-links">
          <h2>HOME</h2>
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={R1Signup} />
        <Route path="/login" component={R1Login} />
        {/* We'll have private routes for member workouts and coach workouts */}
      </Switch>
    </div>
  );
}

export default App;
