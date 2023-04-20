import React, { useEffect, useState } from 'react'
import { deleteTask, getUserPost } from '../../api/task/task'
import Card from '../card/card'
import Taskcard from '../card/taskcard'


function UserPosts() {
  let [allPosts, setPosts] = useState([])
  let [posts, setcurrPosts] = useState([])
  let [status, setStatus] = useState('All')
  let [completePosts, setComplete] = useState([])
  let [pendingPosts, setPending] = useState([])

  const getData = () => {
    const token = localStorage.getItem("token")

    getUserPost(token)
      .then(res => {

        setPosts(res.tasks.reverse())
        setComplete(res.completed)
        setPending(res.pending)
        setcurrPosts(res.tasks.reverse())

      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
      switch(status){
        case 'All':setcurrPosts(allPosts)
                  break;
        case 'Pending':setcurrPosts(pendingPosts)
                  break;
        case 'Completed':setcurrPosts(completePosts)
                  break;
      }

  }, [status])

  useEffect(() => {
    getData()
  }, [])
  const remove = (tid) => {
    const token = localStorage.getItem("token")
    deleteTask(token, tid)
    .then(data => getData())
    .catch(err => console.log(err))

  }

  return (
    <div>

      {allPosts.length == 0 ? <center><p>You have no tasks</p></center>
        : <div className='flex w-full flex-col'>

          <div className='flex gap-6 w-full flex-wrap'>
            <Card title={"Total Tasks"} count={allPosts.length} color={"bg-gradient-to-r from-gray-400 to-black"} />
            <Card title={"Completed"} count={completePosts.length} color={"bg-gradient-to-r from-blue-200 to-cyan-500"} />
            <Card title={"Pending"} count={pendingPosts.length} color={"bg-gradient-to-r from-purple-400 to-pink-600"} />
          </div>
          <div className='p-5 text-gray-400 font-medium flex gap-5'>
            <label htmlFor="filter">Filter :</label>
            <select id='filter' onChange={(e) => setStatus(e.target.value)}>
              <option>All</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>

          </div>
          {
            posts.length==0 && <center><p>You have 0 {status} tasks</p></center>
          }
          <div className='p-3 flex gap-5 sm:flex-row flex-col w-full flex-wrap justify-stretch'>
            {
              posts.map(item => <Taskcard
                key={item.tid} id={item.tid}
                title={item.title}
                desc={item.description}
                status={item.status}
                remove={remove} />)
            }
          </div>


        </div>
      }

    </div>
  )
}

export default UserPosts
