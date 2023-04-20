import { NavLink, useNavigate } from "react-router-dom";
import FormImg from "./formImg";
import { useState } from "react";
import { SignIn } from "../../api/user/user";


const LoginForm = () => {
    const[userdata,setUserdata]=useState({username:"",password:""})
    const [err,setErr]=useState(null)
    const navigate=useNavigate()
    const handleChange=(e)=>{
        setUserdata({
            ...userdata,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        SignIn(userdata)
        .then(response=>{
            setErr(null)
            navigate('/')
            
        })
        .catch(err=>setErr(err.response.data.message))
    }


    return (

        <section className="85vh">
            <div className="h-full">
                <div
                    className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                   <FormImg/>
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <form onSubmit={handleSubmit}>
                        <p className="text-2xl font-bold  p-6 text-blue-500">Sign In</p>
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    className=" block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none text-gray-700"
                                    id="exampleFormControlInput2"
                                    placeholder="username"
                                    name="username"
                                    onChange={handleChange}
                                    />
                              
                            </div>
                            <div className="relative mb-6">
                                <input
                                    type="password"
                                    className="block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none  text-gray-700 "
                                    id="exampleFormControlInput22"
                                    placeholder="Password" name="password"  onChange={handleChange}/>
                               
                            </div>
                            <div className="text-center lg:text-left flex flex-col">
                                <button type="submit"
                                    className=" sm:w-fit w-full inline-block rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white ">

                                    Login
                                </button>
                                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                    Don't have an account?
                                    <NavLink to={'/register'}>
                                    <span className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                                    Register</span>
                                    </NavLink>
                                </p>
                                {err && <div className='p-2 text-white bg-red-600 rounded-lg w-fit'>{err}</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
