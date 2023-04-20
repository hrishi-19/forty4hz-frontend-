import React from 'react'
import {BiEdit,BiTrash} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import {BsCheckCircle} from 'react-icons/bs'
import{MdOutlinePendingActions} from 'react-icons/md'

function Taskcard({id,title,desc,status,remove}) {
    let border=status===0?'border-red-600':'border-green-600'
    let grad=status===0?'bg-red-600':'bg-green-600'
    const navigate=useNavigate()
    
  return (
    <div className={`bg-white shadow-md rounded-md p-3 sm:w-1/4 w-full text-gray-700  flex flex-col sm:gap-3 gap-1 sm:border-l-4 border-l-2 ${border}`}>
    <p className='sm:font-bold font-semibold text-right'> Id:{id}</p>
    <p className='font-semibold sm:text-xl text-lg'>{title}</p>
    <p className='font-medium sm:text-xl text-md h-10 truncate'>"{desc}"</p>
   <span className={`rounded-md p-2  ${border}   w-fit text-white ${grad}`}>
        {status===0?<MdOutlinePendingActions size={20}/>:<BsCheckCircle size={20}/>}
   </span>

   <div className='flex justify-between items-center'>
   <button className='flex items-center gap-2 sm:border-2 border border-blue-600 rounded-md px-1 text-blue-500' onClick={()=>navigate(`/task/${id}`)}>
   <BiEdit/>
   Edit
   </button>
   <button className='flex items-center gap-2 sm:border-2 border border-red-600 rounded-md px-1 text-red-600' onClick={()=>remove(id)}>
   <BiTrash/>
   Delete
   </button>
   
   </div>
      
    </div>
  )
}

export default Taskcard
