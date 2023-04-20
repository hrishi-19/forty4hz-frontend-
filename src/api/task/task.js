import axios from "axios";


export const getUserPost=async(token)=>{
    
        const response=await axios.get('/api/task',{
            headers:{
                "Authorization":`Bearer ${token}`
               }
        })
        let tasks=[]
        let completed=[]
        let pending=[]

        tasks=response.data.userTask
        completed=response.data.userTask.filter(item=>item.status===1)
        pending=response.data.userTask.filter(item=>item.status===0)
        return{tasks,pending,completed}

   
    
}
export const addTask=async(token,data)=>{
   
   
   
        const response=await axios.post('/api/task',
    {
        ...data
    },
    {
        headers:{
            "Authorization":`Bearer ${token}`
           }
    })
    return response

   
}
export const deleteTask=async(token,tid)=>{
   
   
    const response=await axios.delete(`/api/task/${tid}`,
    {
        headers:{
            "Authorization":`Bearer ${token}`
           }
    })
    return response
   
}
export const updateTask=async(token,tid,data)=>{
   
  
    const response=await axios.put(`/api/task/${tid}`,
    {
        ...data
    },
    {
        headers:{
            "Authorization":`Bearer ${token}`
           }
    })
    return response
   
}
export const getSingle=async(token,tid)=>{
   
   
     const response=await axios.get(`/api/task/${tid}`,
     {
         headers:{
             "Authorization":`Bearer ${token}`
            }
     })
     return response
   
 }