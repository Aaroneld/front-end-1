import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const WorkoutList = (props) => {
    return ( 
        <StyleContainer>
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
        workouts: state.workoutsReducer.workouts
    }
}
export default connect(mapProps, {})(WorkoutList);