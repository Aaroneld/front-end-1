import React, { useEffect } from 'react'
import HomePage from './components/HomePage'
import R1Signup from './components/R1Signup'
import R1Login from './components/R1Login'
import WorkoutList from './components/users/WorkoutList'
import Workout from './components/users/Workout'
import InstructorWorkout from './components/instructors/InstructorWorkout'
import InstructorWorkoutList from './components/instructors/InstructorWorkoutList'
import R1WorkoutForm from './components/instructors/R1WorkoutForm'
import SearchList from './components/SearchList'
import { Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './utilities/PrivateRoute'
import { connect } from 'react-redux'
import { getWorkouts } from './actions/workoutsActions'
import { updateFalse } from './actions/usersActions'
import './App.css'

function App(props) {

  useEffect(() => {
    // This will fetch the workout list and set it to our redux state
    props.getWorkouts()
    props.updateFalse()
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
        <PrivateRoute path="/workout-Instructor/:id">
          <InstructorWorkout />
        </PrivateRoute>
        {/* <Route path="/workout-Instructor/:id" component={InstructorWorkout} /> */}
        <Route path="/workout/:id" component={Workout} />
        <PrivateRoute path="/list-Instructor">
          <InstructorWorkoutList />
        </PrivateRoute>
        {/* <Route path="/list-Instructor" component={InstructorWorkoutList} /> */}
        <Route path="/list" component={WorkoutList} />
        <PrivateRoute path="/create">
          <R1WorkoutForm />
        </PrivateRoute>
        <Route path="/search" component={SearchList} />
        {/* <Route path="/create" component={R1WorkoutForm} /> */}
      </Switch>
    </div>
  );
}

const mapProps = (state) => {
  return {
    shouldUpdate: state.workoutsReducer.shouldUpdate
  }
}
export default connect(mapProps, { getWorkouts, updateFalse })(App);
