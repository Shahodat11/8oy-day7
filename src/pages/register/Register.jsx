import React from 'react'
import { useGetInputValue } from '../../hooks/useGetInputValue'

const initialState = {
    UserName: "",
    password: "",
    FirstName: "",
    LastName: "",
    phones: "",
}

const Register = () => {
   const {formData, handleChange} = useGetInputValue(initialState)
   console.log(formData);
  return (
    <div>
        <div>
            <form>
                <h2>Register</h2>
                <input value={formData.UserName} onChange={handleChange} name="UserName" type="text" />
                <input value={formData.password} onChange={handleChange} name="password" type="text" />
                <input value={formData.FirstName} onChange={handleChange} name="FirstName" type="text" />
                <input value={formData.LastName} onChange={handleChange} name="LastName" type="text" />
                <input value={formData.phones} onChange={handleChange} name="phones" type="text" />
            </form>
        </div>
    </div>
  )
}

export default Register
