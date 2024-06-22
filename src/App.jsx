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
    <>
    <Link to={"/"}>Home</Link>
    <Link to={"/user"}>user</Link>
    <Link to={"/login"}>login</Link>
    <Link to={"/register"}>register</Link>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
