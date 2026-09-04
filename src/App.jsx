import React from 'react'
import List from './List'

function Cat(props) {
  
  const {text, grear} = props
  
  return (
    <h1 className = "text-blue-200">My cat is good {grear},{text}</h1>
    
   );
}


const App = () => {
  return (<>
    <div className = "text-3xl text-white">hello</div>
    <Cat text = "guy" grear="man"/>
    <List/>
  </>
  )
}

export default App