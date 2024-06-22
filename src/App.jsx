import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import User from './pages/user/User'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container nav-link'>
    <Link to={"/"}>Home</Link>
    <Link to={"/user"}>User</Link>
    <Link to={"/login"}>Login</Link>
    <Link to={"/register"}>Register</Link>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </div>
  )
}

export default App
