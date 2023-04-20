import React, { useEffect, useState } from 'react'
import { getSingle } from '../../api/task/task'
import { useNavigate } from 'react-router-dom'

function UpdateForm({ tid, updateTask }) {
    const navigate=useNavigate()
    const [formdata, setFormdata] = useState({
        status: "",
        title: "",
        description: ""
    })
    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.name==='status'?parseInt(e.target.value):e.target.value
        })
       

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        updateTask(formdata)

    }
    useEffect(() => {
        const token = localStorage.getItem("token")
        getSingle(token, tid)
            .then(res => setFormdata({
                title: res.data.data[0].title,
                description: res.data.data[0].description,
                status: res.data.data[0].status
            }
            ))
            .catch(err =>{
                console.log(err)
                navigate(`/${err.response.status}`)
            })

    }, [tid])
    return (


        <div className="p-8">
            <h1 className="font-medium text-3xl">Edit Task </h1>
            <p className="text-gray-600 mt-6">Task id:{tid}</p>

            <form className='flex flex-col w-full py-5' onSubmit={handleSubmit}>
                <div className=" sm:w-3/5 w-full flex flex-col gap-5">
                    <div>
                        <label htmlFor="title" className="text-sm text-gray-700 block mb-1 font-semibold">Title</label>
                        <input onChange={handleChange} type="text" name="title" id="title" className="bg-gray-100 border h-10 border-gray-200 rounded py-1 px-3 block border-none text-gray-700 w-full" value={formdata.title} />
                    </div>

                    <div>
                        <label htmlFor="desc" className="text-sm text-gray-700 block mb-1 font-semibold">Description</label>
                        <textarea onChange={handleChange} rows='10' cols="15" value={formdata.description} type="text" name="description" id="desc" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block border-none text-gray-700 w-full " />
                    </div>
                    <div className='flex gap-5 text-sm text-gray-700'>
                        <label>
                            <input name="status" type="radio" value="0" checked={formdata.status === 0} onChange={handleChange} />
                            Pending
                        </label>
                        <label>
                            <input name="status" type="radio" value="1" checked={formdata.status === 1} onChange={handleChange}/>
                            Completed
                        </label>

                    </div>


                </div>

                <div className="space-x-4 mt-8">
                    <button type="submit" className="py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 active:bg-orange-700 disabled:opacity-50">Edit</button>


                    <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateForm
