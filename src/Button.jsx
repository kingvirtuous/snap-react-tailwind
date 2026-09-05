import React from 'react'

const Button = () => {
  return (<>
    <div>
    <button className="text-white m-4 py-5
      px-9 border-2 border-white rounded-md">first</button>
      <button className="bg-sky-400 text-2xl text-white m-5 px-10 py-5 rounded-lg hover:text-black bg-blue-400">Second</button>
      <button className="rounded-full bg-violet-200 text-violet-600 p-7 m-2">Third</button>
      <button className="rounded-lg bg-cyan-700 text-white p-10 mx-5">Fourth</button>
      </div>
    </>
  )
}

export default Button