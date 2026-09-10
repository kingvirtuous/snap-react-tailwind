import React from 'react'

const Quote3 = (props) => {
  const {quote} = props;
  return (<div className="flex flex-col items-center justify-center">
    <div className="flex-col flex items-start">
      <div className="text-2xl w-92 px-4 py-8 text-white bg-rose-400 rounded-t-lg rounded-br-lg">{quote.text}</div>
      <div className="p-5 border border-b-rose-400 rounded-b-lg bg-pink-100 mb-[46px] border-l-rose-400 border-r-rose-400">
        <div className="text-rose-950 text-[20px]">{quote.author}</div>
          <div className="text-rose-500">{quote.bio}</div>
      </div>
    </div>
 </div> )
}

export default Quote3