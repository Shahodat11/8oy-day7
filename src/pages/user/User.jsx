import React, { useEffect, useState } from 'react'
import axios from '../../api'
import img from '../../assets/2815428.png'

const User = () => {
  const [users, setUsers] = useState(null)
  useEffect(()=>{
    axios
      .get("/users/search", {params: {limit:100}})
      .then(res =>{
        setUsers(res.data.data.users);
      })
  }, [])
  return (
    <div>
      <div className='users'>
        {
          users?.map(user =>(
            <div className='user' key={user.id}>
              <img className='img'  src={img} alt="" />
              <h3 className='h3'>{user.FirstName}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default User
