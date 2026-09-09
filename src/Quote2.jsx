import React from 'react'

const Quote2 = (props) => {
  const {quote} = props;
  return (
    <div> class
      <div>
        <div>{quote.author}</div>
        <div>{quote.bio}</div>
      </div>
      <div>{quote.text}</div>
    </div>
  )
}

export default Quote2