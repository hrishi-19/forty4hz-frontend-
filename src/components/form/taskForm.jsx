import React, { useState } from 'react'

function TaskForm({submitTask}) {
    const[formdata,setFormdata]=useState({title:"",description:""})
    const handleChange=(e)=>{
        setFormdata({
            ...formdata,
            [e.target.name]:e.target.value
        })

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
       submitTask(formdata)

    }
  return (
    <div className="p-8">
    <h1 className="font-medium text-3xl">Add Task</h1>
    <p className="text-gray-600 mt-6">Add tasks and complete them</p>
  
    <form className='flex flex-col w-full py-5' onSubmit={handleSubmit}>
      <div className=" sm:w-3/5 w-full flex flex-col gap-5">
        <div>
          <label htmlFor="title" className="text-sm text-gray-700 block mb-1 font-semibold">Title</label>
          <input  onChange={handleChange} type="text" name="title" id="title" className="bg-gray-100 border h-10 border-gray-200 rounded py-1 px-3 block border-none text-gray-700 w-full" />
        </div>
  
        <div>
          <label htmlFor="desc" className="text-sm text-gray-700 block mb-1 font-semibold">Description</label>
          <textarea  onChange={handleChange}  rows='10' cols="15" type="text" name="description" id="desc" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block border-none text-gray-700 w-full" />
        </div>
  
       
      </div>
  
      <div className="space-x-4 mt-8">
        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Add</button>
      </div>
    </form>
  </div>
  )
}

export default React.memo(TaskForm)
