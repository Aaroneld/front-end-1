import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { searchWorkout } from '../../actions/workoutsActions'
import styled from 'styled-components'

// This will show the workout list but a little different for coaches, giving them access to update and delete workouts in the list, each workout will dynamically link to a component that lets them update their workouts

const StyleSection = styled.div`
    display: flex;
    flex-direction: column;
`

const InstructorWorkoutList = (props) => {
    const { push } = useHistory()
    const initState = {
        input: "",
        type: ""
    }
    const [searchTerms, setSearchTerms] = useState(initState)

    const handleChanges = evt => {
        setSearchTerms({
            ...searchTerms,
            [evt.target.name]: evt.target.value
        })
    }
    const handleSearch = evt => {
        evt.preventDefault()
        let filteredClasses = props.workouts.filter(choice => (
            choice.searchTerms.type.includes(searchTerms.input)
        ))
        props.searchWorkout(filteredClasses)
        push("/instructor-search")
    }

    return ( 
        <StyleSection>
            <input type="text"
            name="input"
            value={searchTerms.input}
            onChange={handleChanges} />
            <select value={searchTerms.type} onChange={handleChanges} name="type">
                <option value>Search Types</option>
                <option>location</option>
                <option>intensity</option> {/*Will need to work on this one*/}
                <option>duration</option> {/*Will need to work on this one too*/}
                <option>type</option>
                <option>instructor_name</option>
            </select>

            <button onClick={handleSearch}>SEARCH</button>

            <Link to="/create">
                <h2>Create a New Workout Class</h2>
            </Link>

            {props.workouts.length > 0 ? props.workouts.map(item => (
                <div key={item.id}>
                    <h2>
                        <Link to={`/workout-Instructor/${item.id}`}>{item.name}</Link>
                    </h2>
                    <h2>Ran by: {item.instructor_name}</h2>
                    <h3>Class Type: {item.type} <br/> Intensity: {item.intensity}</h3>
                    <h3>Class Size: {item.max_size}</h3>
                    <p>{item.location}</p>
                    <p>{item.date}</p>
                </div>
            )) : <div>No Workouts Available at this time</div>}
        </StyleSection>
     );
}

const mapProps = (state) => {
    return {
        workouts: state.workoutsReducer.workouts,
        searchedWorkouts: state.workoutsReducer.searchedWorkouts
    }
}
export default connect(mapProps, { searchWorkout } )(InstructorWorkoutList);