import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

// I'll let you build out this form for logging in, you'll need a local state (probably just a name and password). Set that up and build an empty handle submit function, I'll finsh it out or I can show you what we'll do for it since it involves authentication (more than likely I'll just handle it solo as it's part of React 2 specifically)

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
        //   console.log(res)
        // })
        // .catch(err => {
        //   console.dir(err)
        // })
        push("/") // this needs to be changed
    }

    return ( 
        <form onSubmit={onSubmit}>
           <header><h1>Login</h1></header> 
           <label>Username&nbsp;
                <input type="text"
                name="username"
                placeholder="username"
                value={loginState.username}
                onChange={onChange} />
            </label>
            <label>Password&nbsp;
                <input type="password"
                name="password"
                placeholder="password"
                value={loginState.password}
                onChange={onChange} />
            </label>
            <button>Login</button>
        </form>
     );
}
 
export default R1Login;