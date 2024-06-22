import React from 'react'
import { useGetInputValue } from '../../hooks/useGetInputValue'

const initialState = {
    UserName: "",
    password: ""
}

const Login = () => {
    const {formData, handleChange,setFormData} = useGetInputValue(initialState)

    const handleLogin = e =>{
        e.preventDefault()
        console.log(formData);
        setFormData(initialState)
    }
  return (
    <div>
        <div>
            <form onSubmit={handleLogin}>
                <h2>login</h2>
                <input value={formData.UserName} onChange={handleChange} name='UserName' type="text" />
                <input value={formData.password} onChange={handleChange} name='password' type="password" />
                <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
