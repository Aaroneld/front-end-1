import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyleLogin = styled.div `
    font-family: sans-serif;
    background-color: #fce4ec;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    form {
    width:450px;
    background: #fff;
    box-shadow: 0 5px 21 px #d4d4d4;
    border-radius:8px;
        h1{
            text-align:center;
            margin-bottom: 5%;
        }
    }
    label{
        position:relative;
        display:block;
        margin-bottom:25px;
    }
    input {
        width:90%;
        height:50px;
        padding:0px 20px;
        margin: 0% 0% 0% 1%;
        font-size:18px;
        border-radius:50px;
        border:0;
        background-color: #e8eaf6;
    }
    strong{
        margin:5px;
        display: block;
        text-align:center;
    }
    button {
     
        display: inline-block;
        width:180px;
        height:50px;
        line-height:50px;
        background: linear-gradient(to left, #e91e63, #f44336); 
        box-shadow: 0 10px 25px #e31e6360;
        border-radius:50px;
        border:none;
        font-size:18px;
        font-weight:500;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-left: 32%;
        margin-bottom: 3%;
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