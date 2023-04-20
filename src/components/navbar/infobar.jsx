import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiMenu,BiX } from 'react-icons/bi';

function Infobar({ user, logout }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  
 
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 w-full ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
          <div className=' fixed top-1 right-1 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"'>
            <BiMenu onClick={() => setNavbarOpen(!navbarOpen)}  size={30} style={{display:navbarOpen?'none':'block'}}/>
            <BiX onClick={() => setNavbarOpen(!navbarOpen)}  size={30} style={{display:navbarOpen?'block':'none'}}/>
          </div>

        </div>
        <div
          className={
            "lg:flex flex-grow items-start  sm:h-auto h-screen sm:justify-end" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col justify-end w-full   lg:flex-row list-none sm:w-auto  sm:items-start items-center">
            <li>
              <p className="text-gray-600 text-xl px-1 text-center">Welcome {user.username}</p></li>
            <li>
              <Link to={"task/add"} >
                <button className="relative inline-flex
                   items-center justify-center p-0.5 mb-2
                    mr-2 overflow-hidden text-sm font-medium
                     rounded-lg group bg-gradient-to-br
                      from-pink-500 to-orange-400 group-hover:from-pink-500
                     group-hover:to-orange-400 
                        hover:text-white   ">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                    Add Task
                  </span>
                </button>
              </Link>

            </li>
            <li>
              <button className="relative inline-flex 
                    items-center justify-center p-0.5 mb-2
                     mr-2 overflow-hidden text-sm font-medium
                       rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400
                        group-hover:from-pink-500 group-hover:to-orange-400
                         hover:text-white ">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 " onClick={logout} >
                  Logout
                </span>
              </button>
            </li>
          </ul>

        </div>
      </div>
    </nav>

  )
}

export default Infobar
