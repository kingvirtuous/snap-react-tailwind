import React from 'react'

const Quote2 = (props) => {
  const {quote} = props;
  return (
    <div className="flex mt-6 p-8"> 
      <div className="bg-blue-700 p-3 rounded-tl-lg rounded-bl-lg">
        <div className="text-white text-3xl">{quote.author}</div>
        <div className="text-sky-400">{quote.bio}</div>
      </div>
      <div className="text-white px-4 py-10 border border-white rounded-r-full">{quote.text}</div>
    </div>
  )
}

export default Quote2