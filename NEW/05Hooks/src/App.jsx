import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    if(count<20)
    setCount(count + 1);
    else;
  };

  const Decrement = () => {
    if(count>0)
    setCount(count - 1);
    else;
    
  };

  return (
    <>
      <h1>{count}</h1>
      <button style={{margin:"20px"}} onClick={Increment}>Add</button>
      <button onClick={Decrement}>Remove</button>
    </>
  );
}

export default App;
