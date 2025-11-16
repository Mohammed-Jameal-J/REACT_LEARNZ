import React from 'react'
import { useState } from 'react'

const UserCard = () => {
    const [user, setUser] = useState(
        {
            name: "Jameal",
            email: "mohammedjameal031@gmail.com",
            age: 23
    })

    const updateName=()=>{
        // let obj={name: "Mohammed Jameal", email: "mohammedjameal031@gmail.com", age: 23}
        let obj={...user, name: "Mohammed Jameal",skills: "React JS"}
        setUser(obj)
    }
  return (
    <> 
    <h3>Name: {user.name} </h3>
    <p>Email:{user.email} </p>
    <p>Age:{user.age} </p>
    <p>Skills:{user.skills}</p>

    <button onClick={updateName}>Update Name</button>
    </>
  )
}

export default UserCard