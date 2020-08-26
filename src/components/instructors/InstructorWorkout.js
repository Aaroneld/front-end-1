import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { axiosAuth } from '../../utilities/apiUtilities'
import { updateTrue } from '../../actions/usersActions'
import { connect } from 'react-redux'

const StyleSimply = styled.div`
    display: flex;
    flex-direction: column;
`

const InstructorWorkout = (props) => {
    const { id } = useParams()
    const { push } = useHistory()
    const initState = {
        name: "",
        instructor_name: "",
        type: "",
        intensity: "",
        location: "",
        date: "11/10/1775",
        max_size: 10,
        duration: 30.00,
        signedUp: false
    }
    const [classToUpdate, setClassToUpdate] = useState(initState)

    useEffect(() => {
        axiosAuth().get(`https://anywhere-fitness-team2.herokuapp.com/api/auth/users/classes/${id}`)
        .then(res => {
            console.log(res)
            setClassToUpdate(res.data.data)
        })
        .catch(err => console.dir(err))
    },[id])

    const handleChanges = evt => {
        setClassToUpdate({
            ...classToUpdate,
            [evt.target.name]: evt.target.value
        })
    }
    const handleSubmit = evt => {
        evt.preventDefault()
    }

    const handleUpdate = evt => {
        evt.preventDefault()
        axiosAuth().put(`https://anywhere-fitness-team2.herokuapp.com/api/auth/instructor/classes/${id}`)
        .then(res => console.log(res))
        .catch(err => console.dir(err))
        push(`/workout-Instructor/${id}`)
        props.updateTrue() 
    }
    const handleDelete = evt => {
        evt.preventDefault()
        axiosAuth().delete(`https://anywhere-fitness-team2.herokuapp.com/api/auth/instructor/classes/${id}`)
        .then(res => console.log(res))
        .catch(err => console.dir(err))
        push("/list-Instructor")
        props.updateTrue()
    }
    
    return ( 
        <StyleSimply>
            <form onSubmit={handleSubmit}>
                <input type="text"
                name="name"
                value={classToUpdate.name}
                onChange={handleChanges} />

                <input type="text"
                name="instructor_name"
                value={classToUpdate.instructor_name}
                onChange={handleChanges} />

                <input type="text"
                name="type"
                value={classToUpdate.type}
                onChange={handleChanges} />

                <select value={classToUpdate.intensity}
                onChange={handleChanges} name="intensity">
                <option value>- Select intesity -</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High </option>
                </select>

                <input type="text"
                name="location"
                value={classToUpdate.location}
                onChange={handleChanges} />

                <input type="date"
                value={classToUpdate.date}
                onChange={handleChanges}
                name="date"
                min="2020-01-01" 
                max="2031-12-31"/>

                <input type="number"
                name="max_size"
                value={classToUpdate.max_size}
                onChange={handleChanges} />

                <input type="number"
                name="duration"
                value={classToUpdate.duration}
                onChange={handleChanges} />

                <button className="update-workout" onClick={handleUpdate}>Update Class</button>
                <button className="delete-workout" onClick={handleDelete}>!Delete Class!</button>
            </form>
        </StyleSimply>
     );
}
 
export default connect(null, { updateTrue } )(InstructorWorkout);