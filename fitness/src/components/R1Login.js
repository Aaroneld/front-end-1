import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

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