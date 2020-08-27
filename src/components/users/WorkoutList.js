import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { searchWorkout } from '../../actions/workoutsActions'
import styled from 'styled-components'

const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const WorkoutList = (props) => {
    const { push } = useHistory()
    const initState = {
        input: "",
        type: ""
    }
    const [searchTerms, setSearchTerms] = useState(initState)
    const [searchKey, setSearchKey] = useState("")

    const handleChanges = evt => {
        setSearchTerms({
            ...searchTerms,
            [evt.target.name]: evt.target.value
        })
    }
    const handleSearch = evt => {
        evt.preventDefault()
        setSearchKey(searchTerms.type)
        let filteredClasses = props.workouts.filter(choice => (
            choice.searchKey.includes(searchTerms.input)
        ))
        props.searchWorkout(filteredClasses)
        console.log(filteredClasses)
        console.log(searchTerms.type)
        push("/search")
    }

    return ( 
        <StyleContainer>
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

            {props.workouts.length > 0 ? props.workouts.map(item => (
                <div key={item.id}>
                    <h2>
                        <Link to={`/workout/${item.id}`}>{item.name}</Link>
                    </h2>
                    <h2>Ran by: {item.instructor_name}</h2>
                    <h3>Class Type: {item.type} <br/> Intensity: {item.intensity}</h3>
                    <h3>Class Size: {item.max_size}</h3>
                    <p>{item.location}</p>
                    <p>{item.date}</p>
                </div>
            )) : <div>No Workouts Available at this time</div>}
        </StyleContainer>
     );
}

const mapProps = (state) => {
    return {
        workouts: state.workoutsReducer.workouts,
        searchedWorkouts: state.workoutsReducer.searchedWorkouts
    }
}
export default connect(mapProps, { searchWorkout })(WorkoutList);