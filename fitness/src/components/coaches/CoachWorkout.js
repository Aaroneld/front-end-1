import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const CoachWorkout = () => {
    const { id } = useParams()
    const { push } = useHistory()

    useEffect(() => {
        // Will grab the individual workout from paramater id and render it with prefilled values, will re-render based on id per dependency array 
    },[id])
    return ( 
        <h1>Placeholder</h1>
     );
}
 
export default CoachWorkout;