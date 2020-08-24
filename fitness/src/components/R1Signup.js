import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from "./R1 Validation/formSchema";

// We'll need your form validation in this form, as well as the password matching confirmation I mentioned on Friday. Feel free to use whatever you like for validation. I do have Yup installed already if you want to use it

// I went ahead and setup most of this form as I remembered that we would need this sign up form to also create our memebers, I don't know why I thought they would be two seperate things at first

const R1Signup = () => {
    const { push } = useHistory()
    const initValues = {
        name: "",
        age: 18,
        email: "",
        password: "",
        role: "",
    }
    // const initialFormErrors = {
    //     username: '',
    //     email: '',
    //     role: '',
    //     civil: '',
    //   }
   
    const [formValues, setFormValues] = useState([initValues])
    // const [formErrors, setFormErrors] = useState(initialFormErrors) 
    // const [disabled, setDisabled] = useState(initialDisabled) 

    
   
    const handleChanges = evt => {
        // React 1, please setup this functionality, we just need to set the state to the user inputs for this section

        // yup
        //     .reach(formSchema, evt.target.name)
        //     .validate(evt.target.value)
        //     .then(valid => {
                
        //     })


        setFormValues({...formValues,[evt.target.name]:evt.target.value})
        
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        // axios.post('https://anytime-fitness.herokuapp.com//api/auth/register', formValues)
        // .then(res => {
        //   console.log(res)
        // })
        // .catch(err => {
        //   console.dir(err)
        // })
        push("/")    
    }

    
    
    

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Username&nbsp;
                <input type="text"
                name="name"
                placeholder="username"
                value={formValues.name}
                onChange={handleChanges} />
            </label>

            <label>Age&nbsp;
                <input type="number"
                name="age"
                placeholder="minimum 18"
                value={formValues.age}
                onChange={handleChanges} />
            </label>

            <label>Email&nbsp;
                <input type="email"
                name="email"
                placeholder="email"
                value={formValues.email}
                onChange={handleChanges} />
            </label>

            <label>Password&nbsp;
                <input type="password"
                name="password"
                placeholder="password"
                value={formValues.password}
                onChange={handleChanges} />
            </label>

            <label>Confirm Password&nbsp;
                <input type="password"
                name="confirmedPassword"
                placeholder="Confirm password"
                value={formValues.confirmedPassword}
                onChange={handleChanges} />
            </label>

            <label>Role&nbsp;
                <select value={formValues.role}
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