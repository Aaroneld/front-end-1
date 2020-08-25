import React, { useEffect, useState } from 'react'
import HomePage from './components/HomePage'
import R1Signup from './components/R1Signup'
import R1Login from './components/R1Login'
import { Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './utilities/PrivateRoute'
import axiosWithAuth from './utilities/apiUtilities'
import { connect } from 'react-redux'
import { getWorkouts } from './actions/workoutsActions'
import './App.css'

function App() {

  useEffect(() => {
    // This will fetch the workout list and set it to our redux state
    // props.getWorkouts()
  }, [props.shouldUpdate])

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

const mapProps = (state) => {
  return {
    shouldUpdate: state.workoutsReducer.shouldUpdate
  }
}
export default connect(mapProps, { getWorkouts })(App);
