import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import styled from 'styled-components'
import { axiosAuth } from '../../utilities/apiUtilities'
import { updateTrue } from '../../actions/usersActions'
import { connect } from 'react-redux'

// Users should be able to sign up for classes from this component, will probably need to pump in should update from props and add in a put request or something to say they signed up for it

const StyleUp = styled.div`
    display: flex;
    flex-direction: column;
`

const Workout = (props) => {
    const { id } = useParams()
    const { push } = useHistory()
    const initState = {
        name: "",
        instructor_name: "",
        type: "",
        intensity: "",
        location: "",
        date: "11/10/1775",
        max_size: "",
        duration: 30.00,
        signedUp: false
    }
    const [thisClass, setThisClass] = useState(initState)

    useEffect(() => {
        axiosAuth().get(`https://anywhere-fitness-team2.herokuapp.com/api/auth/users/classes/${id}`)
        .then(res => {
            console.log(res)
            setThisClass(res.data.data)
        })
        .catch(err => console.dir(err))
    },[id])

    // Just Realized from looking at back in that users have no real way of signing up to the classes as the only user type that can make put requests are the InstructorWorkoutList, perhaps I should adjust the instructor form to allow them to set the number of current members to account for users wanting to sign up

    // const signUp = evt => {
    //     evt.preventDefault()
    //     setThisClass({
    //         ...thisClass,
    //         signedUp: true
    //     })
    //     axiosAuth().put(`https://anywhere-fitness-team2.herokuapp.com/api/auth/users/classes/${id}`, thisClass)
    //     .then(res => {
    //         console.log(res)
    //         props.updateTrue()
    //         push("/list")
    //     })
    //     .catch(err => console.dir(err))
    // }

    return ( 
        <StyleUp>
            <h2>{thisClass.name}</h2>
            <h2>Ran by: {thisClass.instructor_name}</h2>
            <h3>Class Type: {thisClass.type} <br/> Intensity: {thisClass.intensity}</h3>
            <h3>Class Size: {thisClass.max_size}</h3>
            <p>{thisClass.location}</p>
            <p>{thisClass.date}</p>
            <Link to="/list">
                <h2>Back to class list</h2>
            </Link>
            {/* <button onClick={signUp}>Sign Up?</button> */}
        </StyleUp>
     );
}
 
export default connect(null, { updateTrue } )(Workout);
