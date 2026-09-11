import React from 'react'

const Nav = () => {
  return (
    <div className="bg-orange-300 flex justify-between px-5">
      <div className=" flex">
        <div className="text-orange-600 m-3">About</div>
        <div className="text-orange-600 m-3">Store</div>
      </div>
      <div className=" items-center flex">
        <div className="text-orange-600 m-3">Setting</div>
        <i className="fa-regular fa-user text-orange-600 m-3"></i>
      </div>
    </div>
  )
}

export default Nav