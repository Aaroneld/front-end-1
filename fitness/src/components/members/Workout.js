import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

// This will be a dynamically routed component that takes you to a workout when you click on it

const Workout = () => {
    const { id } = useParams()
    const { push } = useHistory()

    useEffect(() => {
        // setup to get the specific workout for the id and it will re-render when the id changes per the dependency array
    },[id])
    return ( 
        <h1>Placeholder</h1>
     );
}
 
export default Workout;
