import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from "../utilities/formSchemaSignup";

const R1Signup = () => {
    const { push } = useHistory()
    const initValues = {
        name: "",
        username: "",
        email: "",
        password: "",
        role: "",
    }
    const initialFormErrors = {
        name:'',
        username: '',
        email: '',
        role: '',
        password:'',
        
      }
      const initialDisabled = true
    const [formValues, setFormValues] = useState([initValues])
    const [formErrors, setFormErrors] = useState(initialFormErrors) 
    const [disabled, setDisabled] = useState(initialDisabled) 

    
   
    const handleChanges = evt => {
        
        const {name,value} = evt.target
        yup
            .reach(formSchema, name)
            .validate(value)
            .then(valid => {
                setFormErrors({
                    ...formErrors,[name]:"",
                })
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors,[name]:err.errors[0]
                })
            })


        setFormValues({...formValues,[name]:value})
        
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        // axios.post('https://anytime-fitness.herokuapp.com/api/auth/register', formValues)
        // .then(res => {
        //   console.log(res)
        // })
        // .catch(err => {
        //   console.dir(err)
        // })
        push("/")  // this needs to be changed
    }

    useEffect(() => {
        formSchema.isValid(formValues)
          .then(valid => {
            setDisabled(!valid);
          })
      }, [formValues])
    
    

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name&nbsp;
                <input type="text"
                name="name"
                placeholder="name"
                value={formValues.name}
                onChange={handleChanges} />
            </label>

            <label>Username&nbsp;
                <input type="text"
                name="username"
                placeholder="username"
                value={formValues.username}
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

            <label>Role&nbsp;

                <select value={formValues.role}
                onChange={handleChanges} name='role'>
                <option value=''>- Select an option -</option>
                <option value='user'>User</option>
                <option value='instructor'>Instructor</option>
                </select>
            </label>
            <div className='errors'>
            <div>{formErrors.username}</div>
            <div>{formErrors.email}</div>
            <div>{formErrors.role}</div>
            <div>{formErrors.name}</div>
            <div>{formErrors.password}</div>
            <button disabled={disabled}>Sign Up!</button>
            </div>

        </form>
     );
}
 
export default R1Signup;