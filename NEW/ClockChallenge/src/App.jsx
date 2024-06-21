import { useState} from 'react';
import './App.css'

function App() {

  const t = new Date().toLocaleTimeString();
  const [time,setTime] = useState(t)
  
  const set = ()=>{
    const t1 = new Date().toLocaleTimeString();
    setTime(t1);
  } 

  setInterval(set,1000)


  return (
    <>
        <h1>{time}</h1>
       
    </>
  )
}

export default App
