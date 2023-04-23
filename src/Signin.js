import React, { useState } from "react"
const Signin = () => {
    const [user,setUser]=useState({email:'',password:''})
    
    const onSave=(evt)=>{
        evt.preventDefault()
        console.log(user)
        setUser({email:'',password:''})
    }
    const onInputChange=(evt)=>{
        console.log(evt.target.name,evt.target.value)
        setUser(user=>{return {...user,[evt.target.name]:evt.target.value}})
    }


    return <div>
        <form onSubmit={onSave}>
            <div className="container col-md-5 m-1">

                <div className="mb-3">
                    <label for='email' className="form-label">Email:</label>
                    <input type='text' id='email' placeholder="email" className="form-control" 
                    name='email' onChange={onInputChange} value={user.email}/>
                </div>
                <div className="mb-3">
                    <label for='password' className="form-label">Password:</label>
                    <input type='password' id='password' placeholder="Password" className="form-control"
                        name='password' onChange={onInputChange} value={user.password}/>
                </div>
                <button type='submit' className="btn btn-primary btn-sm">Submit</button>

            </div>
        </form>
    </div>
}
export default Signin