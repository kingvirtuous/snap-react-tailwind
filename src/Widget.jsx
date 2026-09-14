import React from 'react'

const Widget = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-green-100 border border-green-400 px-8 py-10 rounded-md m-5">
        <i className="fa-solid fa-user text-black text-6xl"></i>
        <button className="bg-green-600 rounded-full p-4 text-white">click me</button>
      </div>
    </div>
  )
}

export default Widget