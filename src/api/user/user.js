import axios from "axios";

export const Register=async(userData)=>{
    const response=await axios.post('/api/user/register',{...userData})
    return response

}
export const SignIn=async(userData)=>{
    const response=await axios.post('/api/user/login',{...userData})
    localStorage.setItem("user",JSON.stringify({...response.data.userData}))
    localStorage.setItem("token",response.data.token)
    return response

}
export const removeUser=()=>{
    const promise=new Promise(function(resolve,reject){
        try{
                localStorage.removeItem("user")
                localStorage.removeItem("token")
                return resolve({msg:"user removed"})
        }catch(err){
                return reject({msg:"Error occured"})
        }
    })
    return promise
}