import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyleSearch = styled.div`
    display: flex;
    flex-direction: column;
`

const UserSearchList = ({ searchedWorkouts }) => {
    return ( 
        <StyleSearch>
            {searchedWorkouts.length > 0 ? searchedWorkouts.map(item => (
                <div key={item.id}>
                    <h2>
                        <Link to={`/workout/${item.id}`}>{item.name}</Link>
                    </h2>
                    <h2>Ran by: {item.instructor_name}</h2>
                    <h3>Class Type: {item.type} <br/> Intensity: {item.intensity}</h3>
                    <h3>Class Size: {item.max_size}</h3>
                    <h3>Duration: {item.duration}</h3>
                    <p>{item.location}</p>
                    <p>{item.date}</p>
                </div> 
                )) : <h2>No Results Found</h2>}
        </StyleSearch>
     );
}
 
const mapProps = (state) => {
    return  {
        searchedWorkouts: state.workoutsReducer.searchedWorkouts
    }
}
export default connect(mapProps, {} )(UserSearchList);