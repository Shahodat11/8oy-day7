import React from 'react'
import { useGetInputValue } from '../../hooks/useGetInputValue'
import axios from '../../api'

const initialState = {
    UserName: "",
    password: "",
    FirstName: "",
    LastName: "",
    phones: "",
}

const Register = () => {
   const {formData, handleChange} = useGetInputValue(initialState)
   
   const handleCreateUser = e =>{
    e.preventDefault()
    formData.phones = [formData.phones]
    axios
        .post("/auth/user/sign-up", formData)
   }
  return (
    <div>
        <div>
            <form onSubmit={handleCreateUser}>
                <h2>Register</h2>
                <input value={formData.UserName} onChange={handleChange} name="UserName" type="text" placeholder='UserName' />
                <input value={formData.password} onChange={handleChange} name="password" type="text" placeholder='password' />
                <input value={formData.FirstName} onChange={handleChange} name="FirstName" type="text" placeholder='FirstName' />
                <input value={formData.LastName} onChange={handleChange} name="LastName" type="text" placeholder='LastName' />
                <input value={formData.phones} onChange={handleChange} name="phones" type="text" placeholder='phones' />
                <button>create</button>
            </form>
        </div>
    </div>
  )
}

export default Register
