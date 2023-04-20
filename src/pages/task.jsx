import React, { useState } from 'react'
import { useNavigate, useParams,Navigate } from 'react-router-dom'
import UpdateForm from '../components/form/updateForm'
import { updateTask } from '../api/task/task'

function Task() {
  const { tid } = useParams()
  const[err,setErr]=useState(null)
  const[user,setuser]=useState(JSON.parse(localStorage.getItem("user")))
  const navigate=useNavigate()
  const editTask=(data)=>{
    const token=localStorage.getItem("token")
    updateTask(token,tid,data)
    .then(res=>navigate('/'))
    .catch(err=>{
      if(err.response.status===400){
        setErr(err.response.data.message)
        setTimeout(()=>{
            setErr(null)
        },2000)
      }else{
        navigate('/*')
      }
      
      
    })
  }
  return (
    <>
    {user !== null ? (
      <div>
      <UpdateForm tid={tid} updateTask={editTask} />
      {err && <div className='p-2 text-white bg-red-600 rounded-lg w-fit absolute sm:left-1/4 left-5 sm:bottom-0 bottom-7  '>{err}</div>}
    </div>
      ):<Navigate to={"/login"}/>}
    </>
   
  )
}

export default Task
