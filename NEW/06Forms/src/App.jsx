import { useState } from 'react'
import './App.css'

function App() {
  let naam
  
  const InputEvent = (e)=>{
     naam = e.target.value
  }

  const [Name,setName] = useState("")
  const [color,setColor] = useState("black")
  
  const Set = ()=>{
      setName(naam);
      setColor("violet")
  }



  return (
    <>  
      <div style={{backgroundColor:{color}}}>
        <h1>Hello, {Name}</h1>
        <input type="text" placeholder='Enter Your Name' onChange={InputEvent} />
        <button onClick={Set}>Click Me 😊 </button> 
      </div>
     
    </>
  )
}

export default App
