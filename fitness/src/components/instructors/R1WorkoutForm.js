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
        max_size: "",
        duration: 60.00, // has to be a float
        signedUp: false,

    }
    const [newWorkout, setNewWorkout] = useState(initiState)

    const handleChanges = evt => {
        const {name,value} = evt.target

        setNewWorkout({...newWorkout,[name]:value})
    }


    const handleSubmit = evt => {
        evt.preventDefault();
    }

    return ( 
        <form onSubmit={handleSubmit}>

            <label>Name&nbsp;
                <input type="text"
                name="name"
                placeholder="name"
                value={newWorkout.name}
                onChange={handleChanges} />
            </label>

            <label>Intructor&nbsp;
            <input type="text"
                name="instructor_name"
                placeholder="instructor name"
                value={newWorkout.instructor_name}
                onChange={handleChanges} />
            </label>

            <label>Type&nbsp;
                <input type="text"
                name="type"
                placeholder="type"
                value={newWorkout.type}
                onChange={handleChanges} />
            </label>

            <label>Intesity&nbsp;
                <select value={newWorkout.intensity}
                onChange={handleChanges} name='intensity'>
                <option value>- Select intesity -</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High </option>
                </select>
            </label>


            <label>Location&nbsp;
                <input type="text"
                name="location"
                placeholder="type"
                value={newWorkout.location}
                onChange={handleChanges} />
            </label>

            <label>Choose a date
                <input type="date"
                value={newWorkout.date}
                onChange={handleChanges} 
                placeholder="dd-mm-yyyy" 
                name="date"
                min="2020-01-01" 
                max="2031-12-31"/>
            </label>

            <label>Duration
                <select
                value={newWorkout.duration}
                onChange={handleChanges} name="duration">
                    <option value>60</option>
                    <option>45</option>
                    <option>30</option>
                    <option>20</option>
                </select>
            </label>

            <label>Maximum Size&nbsp;
                <input type="number"
                name="max-size"
                placeholder="max size"
                pattern='[0-9]{0,5}'
                value={newWorkout.max_size}
                onChange={handleChanges} />
            </label>
            
            <button>Submit</button>



        </form>
     );
}
 
export default R1WorkoutForm;