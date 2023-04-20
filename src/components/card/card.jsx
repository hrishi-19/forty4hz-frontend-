import React from 'react'

function Card({title,count,color}) {
  return (
    <div className={`${color} shadow-gray-400 shadow-md rounded-lg sm:p-5 p-2 sm:w-1/4 w-1/3`} >
    <p className={`sm:text-xl  text-md sm:font-bold font-semibold text-white text-center `}>{title}</p>
    <p className={`sm:text-2xl  text-lg sm:font-bold font-semibold text-white text-center `}>{count}</p>
      
    </div>
  )
}

export default Card
