import React from 'react'

const Foogle = () => {
  return (<>
    <div className="bg-orange-200 flex-1 flex justify-center items-center">
      <div className="flex flex-col items-center">
       <div className="text-orange-600 text-5xl">Foggle</div>
      <div className="bg-orange-300 mt-3.5 rounded-full p-4 w-[250px]"><i className="fa-solid fa-magnifying-glass text-orange-600"></i><input /></div>
        <div className="flex">
        <div className="m-1 bg-purple-300 text-purple-500 p-1 rounded-sm mt-3">Foogle Search</div>
        <div className="m-1 bg-purple-300 text-purple-500 p-1 rounded-sm mt-3 ml-2">Image Search</div></div>
        </div>
    </div>
      <div className="bg-purple-100 text-purple-600 p-2  mx-2 text-1xl flex justify-between">
        <div>
          this site is not real
        </div>
        <div>
         made with love and tailwind
        </div>
        <div><a href="https://kingvirtuousdev.netlify.app">
          by king virtuous</a>
        </div>
      </div>
    </>
  )
}

export default Foogle