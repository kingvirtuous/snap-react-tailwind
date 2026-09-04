import React from 'react'

function Cat(props) {
  
  const {text, grear} = props
  
  return (
    <h1 className = "text-blue-200">My cat is good {grear}</h1>
    
   );
}


const App = () => {
  return (<>
    <div className = "text-3xl text-white">hello</div>
    <Cat text = "guy" grear="man"/>
  </>
  )
}

export default App