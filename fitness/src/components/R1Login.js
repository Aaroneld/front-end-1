import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyleLogin = styled.div `
    font-family:sans-serif;
    background-image: url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    background-size:cover;
    display:flex;
    background-size: cover;
    justify-content:center;
    align-items:center;
    height:100vh;
    form {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        width:400px;
        padding:40px;
        background: rgba(0,0,0,0.8);
        box-sizing:border-box;
        box-shadow: 0 15px 25px rgba(0,0,0,0.5);
        border-radius:10px;
    }
    h1 {
        color: #fff;
        text-align: center;
    }
    strong{
        color: #fff;
        text-align: center;
        font-size: 18px;
    }
    input {
        width:100%;
        padding: 10px 0 ;
        font-size: 16px;
        color: #fff;
        margin-bottom:30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline:none;
        background: transparent;
    }
    button {
        background: transparent;
        border:none;
        outline:none;
        color: #fff;
        background: #03a9f4;
        padding: 10px 20px;
        cursor: pointer;
        border-radius:5px;
    }

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
        <StyleLogin >
            <form onSubmit={onSubmit}>
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
            </form>
        </StyleLogin>
     );
}
 
export default R1Login;