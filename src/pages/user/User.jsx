import React, { useEffect } from 'react'
import axios from '../../api'

const User = () => {
  useEffect(()=>{
    axios
      .get("/category")
  }, [])
  return (
    <div>
      <h2>User</h2>
    </div>
  )
}

export default User
