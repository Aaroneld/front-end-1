import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateTrue } from '../actions/usersActions'

const R1Login = (props) => {
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
        axios.post('https://anywhere-fitness-team2.herokuapp.com/api/auth/login', loginState)
        .then(res => {
          localStorage.setItem("token", res.data.token)
          console.log(res)
        })
        .catch(err => {
          console.dir(err)
        })
        props.updateTrue()
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
 
export default connect(null, { updateTrue })(R1Login);