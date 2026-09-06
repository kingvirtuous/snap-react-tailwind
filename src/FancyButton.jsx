import React from 'react'

const getStatus = (code) => {
  if (code === 200) return 'OK';
  if (code === 404) return 'Not Found';
  if (code === 500) return 'Server Error';
  return 'Unknown';
};

const FancyButton = (props) => {
  const {children, large} = props
  // const mystyle = large? "rounded-lg" : "rounded-full"
  const mysty = () => {
    return(
      if (large) {
       mystyle = "rounded-lg"
    }
    );]hia 
    }
  
  return (
    <div>
      <button className={`text-sky-700 border-2 boder-sky-700 bg-sky-300 m-3 px-7 py-5 text-2xl ${mystyle}`}>{children}</button>
    </div>
  )
}

export default FancyButton