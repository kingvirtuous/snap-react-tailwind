import React from 'react'

const Quote1 = (props) => {
  const {meee} = props;
  return (
    <div>
      <div className="text-sky-100 bg-sky-500 py-8 px-7 w-92">{meee.text}</div>
        <div className="bg-stone-300 px-[79px] py-3 w-92">
          <div className="text-2xl text-sky-500">{meee.author}</div>
          <div>{meee.bio}</div>
        </div>
    </div>
  )
}

export default Quote1