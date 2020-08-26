import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from "../utilities/formSchemaSignup";
import styled from 'styled-components'

const StyleSignUp = styled.div `
    font-family: sans-serif;
    background-image: url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
    display:flex;
    background-size: cover;
    justify-content:center;
    align-items:center;
    height:100vh;
    form {
        max-width:350px;
        border-radius:20px;
        margin:auto;
        background: rgba(0,0,0,0.8);
        box-sizing:border-box;
        padding:40px;
        color: #fff;
        margin-top:100px;
        h1{
            text-align:center;
        }
       
        input{
            width:100%;
            box-sizing: border-box;
            padding: 12px 5px;
            background: rgba(0,0,0,0.10);
            outline: none;
            border:none;
            border-bottom: 1px dotted #fff;
            color:#fff;
            border-radius:5px;
            margin:5px;
            font-weight:bold;
            margin-top: 2%;
        }
        select {
            width:100%;
            box-sizing: border-box;
            padding: 12px 5px;
            background:rgba(0,0,0,0.10)
            outline: none;
            border:none;
            border-bottom: 1px dotted #fff;
            color:black;
            border-radius:5px;
            margin:5px;
            font-weight:bold;
            margin-top: 2%;
        }
        button {
            width:100%;
            box-sizing:border-box;
            padding:10px 0;
            margin-top:30px;
            outline:none;
            border:none;
            background: #60adde;
            opacity:0.7;
            border-radius:20px;
            font-size:20px;
            color:#fff;
        }
    }
    .errors div {
        margin-top: 10%
    }
`



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
    const [formValues, setFormValues] = useState(initValues)
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
        axios.post('https://anywhere-fitness-team2.herokuapp.com/api/auth/register', formValues)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.dir(err)
        })
        push("/")
    }

    useEffect(() => {
        formSchema.isValid(formValues)
          .then(valid => {
            setDisabled(!valid);
          })
      }, [formValues])
    
    

    return ( 
        <StyleSignUp>
        <form onSubmit={handleSubmit}>
            <header><h1>Sign up Here</h1></header>
            <label>
                <strong>Name</strong>
                <input type="text"
                name="name"
                placeholder="name"
                value={formValues.name}
                onChange={handleChanges} />
            </label>

            <label>
                <strong>Username</strong>
                <input type="text"
                name="username"
                placeholder="username"
                value={formValues.username}
                onChange={handleChanges} />
            </label>

            <label>
                <strong>Email</strong>
                <input type="email"
                name="email"
                placeholder="email"
                value={formValues.email}
                onChange={handleChanges} />
            </label>

            <label>
                <strong>Password</strong>
                <input type="password"
                name="password"
                placeholder="password"
                value={formValues.password}
                onChange={handleChanges} />
            </label>

            <label>
                <strong>Role</strong>
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
                <button disabled={disabled}>Sign Up</button>
            </div>

        </form>
        </StyleSignUp>
     );
}
 
export default R1Signup;