import React from 'react'
import List from './List'
import Button from './Button'
import FancyButtton from './FancyButton.jsx'
import Quote1 from './Quote1'
import Quote2 from './Quote2'
import Quote3 from './Quote3'


function Cat(props) {
  
  const {text, grear} = props
  
  return (
    <h1 className = "text-blue-200">My cat is good {grear},{text}</h1>
    
   );
}

const quote1 = {
  text: "One of my most productive days was throwing away 1000 lines of code.",
  author: "Ken Thompson",
  bio: "Designer of Unix Operating System",
};

const quote2 = {
  text: "A ship in port is safe, but that's not what ships are built for.",
  author: "Admiral Grace Hopper",
  bio: "Inventor of Programming Compilers",
};

const quote3 = {
  text: "If you optimize everything, you will always be unhappy.",
  author: "Donald Knuth",
  bio: "Pioneer of Algorithm Analysis",
};



const App = () => {

  
  
  return (<>
    <div className = "text-3xl text-white">great</div>
    <Cat text = "guy" grear="man"/>
    <List/>
    
    <Button/>
    <FancyButtton large={true}>Click me</FancyButtton>
      <FancyButtton large={false}>Submit</FancyButtton>
    <Quote1 meee={quote1}/>
    <Quote2 quote={quote2}/>
    <Quote3 quote={quote3}></Quote3>
  </>
  )
}

export default App