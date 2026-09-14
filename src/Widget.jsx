import React, { useState } from 'react'

const Widget = () => {

  const [togle, setTogle] = useState(false)
  const [Color, setColor] = useState(false)
  return (
    <div className="flex flex-col items-center">
      <div className="bg-green-100 border border-green-400 px-8 py-10 rounded-md m-5 flex-col flex items-center">
       {togle ? <i className="fa-solid fa-user text-black text-6xl"></i> : null}
        <button className="bg-green-600 mt-3 rounded-full p-4 text-white" onClick={()=> 
      setTogle(!togle)
          }>click me</button>
      </div>
      <div className="bg-green-100 border border-green-400 px-8 py-10 rounded-md m-5 flex-col flex items-center">
        
        <button className={`${Color? "bg-gray-600" : "bg-orange-600"} mt-3 rounded-full p-4 text-white` }onClick={()=> 
      setColor(!Color)
          }>click me</button>
      </div>
    </div>
  )
}

export default Widget