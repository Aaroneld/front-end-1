import React, { useState, useEffect } from 'react'
import axios from 'axios'

// We'll need your form validation in this form, as well as the password matching confirmation I mentioned on Friday. Feel free to use whatever you like for validation. I do have Yup installed already if you want to use it

// I went ahead and setup most of this form as I remembered that we would need this sign up form to also create our memebers, I don't know why I thought they would be two seperate things at first

const R1Signup = () => {
    const initValues = {
        name: "",
        age: 18,
        email: "",
        password: "",
        confirmedPassword: "",
        role: "",
    }
    const [newMember, setNewMember] = useState([])
    const [formValues, setFormValues] = useState([initValues])
    
    // const postNewMember = newSignups => {
    //     axios.post('https://anytime-fitness.herokuapp.com//api/auth/register', newSignups)
    //     .then(res => {
    //       setNewMember([...newMember, res.data])
    //     })
    //     .catch(err => {
    //       debugger
    //     })
    //     .finally(() => {
    //       setFormValues(initValues)
    //     })
    // } // this is for the POST request , I tried but it is giving me data as html. I might did something wrong
    const handleChanges = evt => {
        // React 1, please setup this functionality, we just need to set the state to the user inputs for this section
        setFormValues({...formValues,[evt.target.name]:evt.target.value})
        
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        const newSignups = {
            name: formValues.name.trim(),
            age: formValues.age,
            email: formValues.email.trim(),
            password:formValues.password.trim(),
            confirmedPassword:formValues.confirmedPassword.trim(),
            role: formValues.role,
        }

        setNewMember([...newMember,newSignups]) // added this to see if I get data from inputs.

        // postNewMember(newSignups)     
    }

    
    
    

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Username&nbsp;
                <input type="text"
                name="name"
                placeholder="username"
                value={newMember.name}
                onChange={handleChanges} />
            </label>

            <label>Age&nbsp;
                <input type="number"
                name="age"
                placeholder="minimum 18"
                value={newMember.age}
                onChange={handleChanges} />
            </label>

            <label>Email&nbsp;
                <input type="email"
                name="email"
                placeholder="email"
                value={newMember.email}
                onChange={handleChanges} />
            </label>

            <label>Password&nbsp;
                <input type="password"
                name="password"
                placeholder="password"
                value={newMember.password}
                onChange={handleChanges} />
            </label>

            <label>Confirm Password&nbsp;
                <input type="password"
                name="confirmedPassword"
                placeholder="Confirm password"
                value={newMember.confirmedPassword}
                onChange={handleChanges} />
            </label>

            <label>Role&nbsp;
                <select value={newMember.role}
                onChange={handleChanges} name='role'>
                <option value=''>- Select an option -</option>
                <option value='Member'>Member</option>
                <option value='Couch'>Couch</option>
                
                </select>
            </label>

            <button>Sign Up!</button>

        </form>
     );
}
 
export default R1Signup;