import React, { useState } from 'react'

// We'll need a form here for coaches to build a workout for their members, the form should have the values listed in the project docs. Use a local state to set those values into when they fill out the form and I'll take over what we need to do with that form 

const R1WorkoutForm = () => {
    const initiState = {
        name:"",
        instructor_name:"",
        type:"",
        intensity:"",
        location:"",
        date: "", //hast to be a string in 04/19/2020 format
        max_size: 10,
        duration: 60.00, // has to be a float
        signedUp: false,

    }
    const [newWorkout, setNewWorkout] = useState(initiState)



    return ( 
        <form>
            <label>Name&nbsp;
                <input type="text"
                name="name"
                placeholder="name"
                value={formValues.name}
                onChange={handleChanges} />
            </label>
            <label>Intructor&nbsp;
                <select value={formValues.role}
                onChange={handleChanges} name='role'>
                <option value=''>- Select an instructor -</option>
                <option value='tom'>Tom</option>
                <option value='Tim'>Tim</option>
                </select>
            </label>
        </form>
     );
}
 
export default R1WorkoutForm;