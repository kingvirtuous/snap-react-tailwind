import React from 'react'

const Quote1 = (props) => {
  const {meee} = props;
  return (
    <div className=" items-center flex flex-col">
      <div className="text-sky-100 bg-sky-500 py-8 px-7 rounded-t-lg w-92">{meee.text}</div>
        <div className="bg-stone-300 px-[79px] py-2 w-92 rounded-b-lg border-2 border-blue-300">
          <div className="text-2xl text-sky-500">{meee.author}</div>
          <div className="text-gray-400">{meee.bio}</div>
        </div>
    </div>
  )
}

export default Quote1