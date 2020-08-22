import React, { useState } from 'react'

// We'll need your form validation in this form, as well as the password matching confirmation I mentioned on Friday. Feel free to use whatever you like for validation. I do have Yup installed already if you want to use it

// I went ahead and setup most of this form as I remembered that we would need this sign up form to also create our memebers, I don't know why I thought they would be two seperate things at first

const R1Signup = () => {
    const initValues = {
        name: "",
        age: 18,
        email: "",
        password: "",
        confirmedPassword: ""
    }
    const [newMember, setNewMember] = useState(initValues)

    const handleChanges = evt => {
        // React 1, please setup this functionality, we just need to set the state to the user inputs for this section
    }
    const handleSubmit = evt => {
        // React 1, please setup this functionality, I'll help with the post request here if needed.
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="name"
            value={newMember.name}
            onChange={handleChanges} />
            <input type="number"
            name="age"
            value={newMember.age}
            onChange={handleChanges} />
            <input type="email"
            name="email"
            value={newMember.email}
            onChange={handleChanges} />
            <input type="text"
            name="password"
            value={newMember.password}
            onChange={handleChanges} />
            <input type="text"
            name="confirmedPassword"
            value={newMember.confirmedPassword}
            onChange={handleChanges} />
            <button>Sign Up!</button>
        </form>
     );
}
 
export default R1Signup;