import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) 
    setCounter(counter + 1);
    console.log("add clicked", counter);
  };

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
    console.log("remove clicked", counter);
  };

  return (
    <>
      <h1>Counter Application </h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value </button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value </button>

      <br />
      <br />
      <p>Made by Paresh Bhamare with help of Chai Aur Code </p>
    </>
  );
}

export default App;
