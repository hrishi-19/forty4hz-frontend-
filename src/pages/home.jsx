import React, {useState } from 'react'
import { Navigate,useNavigate } from 'react-router-dom'
import UserPosts from '../components/container/userPosts'
import { removeUser } from '../api/user/user'
import Infobar from '../components/navbar/infobar'

function Home() {
    const[user1,setuser]=useState(JSON.parse(localStorage.getItem("user")))
    const navigate=useNavigate()
    const logout=()=>{
        
        removeUser()
        .then(data=>navigate("/login"))
        .catch(err=>console.log(err))
     }

    return (
        <div className='sm:p-5 p-2 w-full'>

            {user1 !== null ? (
                <>
                <Infobar user={user1} logout={logout}/>
                <UserPosts/>
                </>
                ):<Navigate to={"/login"}/>}
        </div>

    )
}

export default Home
