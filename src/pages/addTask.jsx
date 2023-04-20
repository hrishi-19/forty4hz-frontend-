import React, { useState } from 'react'

import { addTask } from '../api/task/task'
import { useNavigate,Navigate } from 'react-router-dom'
import TaskForm from '../components/form/taskForm'

function AddTask() {
    const navigate=useNavigate()
    
    
    const[user,setuser]=useState(JSON.parse(localStorage.getItem("user")))
    const[err,setErr]=useState(null)
    const submitTask=(data)=>{
        const token=localStorage.getItem("token")
        addTask(token,data)
        .then(data=>navigate("/"))
        .catch(err=>{
          setErr(err.response.data.message)
          setTimeout(()=>{
            setErr(null)
          },3000)
        })
    }
  return (
    <>
    {user !== null ? (
      <>
      <TaskForm submitTask={submitTask}/>
      {err && <div className='p-2 text-white bg-red-600 rounded-lg w-fit absolute sm:left-1/4 left-5 sm:bottom-0 bottom-7  '>{err}</div>}
      </>
      ):<Navigate to={"/login"}/>}
   
   </>
   )
}

export default AddTask
