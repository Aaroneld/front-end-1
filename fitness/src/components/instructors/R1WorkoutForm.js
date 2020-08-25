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
                <select value={newWorkout.instructor_name}
                onChange={handleChanges} name='instructor_name'>
                <option value=''>- Select an instructor -</option>
                <option value='tom'>Tom</option>
                <option value='sara'>Sara</option>
                <option value='tim'>Tim</option>
                <option value='josh'>Josh</option>
                <option value='Timmy'>Timmy</option>
                </select>
            </label>

            <label>Type&nbsp;
                <select value={newWorkout.type}
                onChange={handleChanges} name='type'>
                <option value=''>- Select workout -</option>
                <option value='aerobic'>Aerobic</option>
                <option value='strength'>Strength</option>
                <option value='balance'>Balance </option>
                <option value='endurance'>Endurance</option>
                <option value='flexibility'>Flexibility</option>
                </select>
            </label>

            <label>Intesity&nbsp;
                <select value={newWorkout.intensity}
                onChange={handleChanges} name='intensity'>
                <option value>- Select intesity -</option>
                <option>Seat</option>
                <option>Daily Activity</option>
                <option>Base </option>
                <option>Heart Health</option>
                <option>Max</option>
                </select>
            </label>


            <label>Location&nbsp;
                <select value={newWorkout.location}
                onChange={handleChanges} name="location">
                <option value>- Select Location -</option>
                <option>New York</option>
                <option>London</option>
                <option>Seattle </option>
                <option>Washinton</option>
                <option>Lexignton</option>
                </select>
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
            <label>Sign up
                <input
                type="checkbox"
                name="signedUp"
                checked={newWorkout.signedUp}
                onChange={handleChanges}
            />
        </label>



        </form>
     );
}
 
export default R1WorkoutForm;