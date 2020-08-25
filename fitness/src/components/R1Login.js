import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyleLogin = styled.form `
    font-family: sans-serif;
    background-color: #fce4ec;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
`

const R1Login = () => {
    const { push } = useHistory()
    const iniState = {
        username:"",
        password:""
    }
    const [loginState, setLoginState] = useState(iniState)

    const onChange = evt => {
        const {name,value} = evt.target

        setLoginState({...loginState,[name]:value})
    }

    const onSubmit = evt => {
        evt.preventDefault();
        // axios.post('https://anytime-fitness.herokuapp.com/api/auth/login', loginState)
        // .then(res => {
        // localStorage.setItem("token", res.data.payload)
        //   console.log(res)
        // })
        // .catch(err => {
        //   console.dir(err)
        // })
        push("/")
    }

    return ( 
        <StyleLogin onSubmit={onSubmit}>
           <header><h1>Login</h1></header> 
           <label>
                 <strong>Username</strong>
                <input type="text"
                name="username"
                placeholder="username"
                value={loginState.username}
                onChange={onChange} />
            </label>
            <label>
                <strong>Password</strong>
                <input type="password"
                name="password"
                placeholder="password"
                value={loginState.password}
                onChange={onChange} />
            </label>
            <button>Login</button>
        </StyleLogin>
     );
}
 
export default R1Login;