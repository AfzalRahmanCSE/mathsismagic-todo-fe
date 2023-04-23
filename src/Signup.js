import React, { useState } from "react"

const Signup = () => {

    const [user,setUser]=useState({name:'',email:'',password:''})

    const onSave=(evt)=>{
        evt.preventDefault()
        console.log(user)
        setUser({name:'',email:'',password:''})
    }

    const onInputChange=(evt)=>{
        console.log(evt.target.name,evt.target.value)
        setUser(user=>{return {...user,[evt.target.name]:evt.target.value}})
    }

return <div className="container col-md-4 m-1">
        <form onSubmit={onSave}>

            <div className="mb-3">
                <label for='name' className="form-label">Name:</label>
                <input id='name' className="form-control" placeholder="Name" name='name'
                    value={user.name} type='text' onChange={onInputChange} />
            </div>

            <div className="mb-3">
                <label for='email' className="form-label">Email:</label>
                <input id='email' className="form-control" placeholder="Email" name='email'
                    value={user.email} type='text' onChange={onInputChange} />
            </div>

            <div className="mb-3">
                <label for='password' className="form-label">Password:</label>
                <input id='password' className="form-control" placeholder="Password" name='password'
                    value={user.password} type='password' onChange={onInputChange} />
            </div>

            <button type='submit' className="btn btn-primary btn-sm">Submit</button>
        </form>

    </div>

}

export default Signup