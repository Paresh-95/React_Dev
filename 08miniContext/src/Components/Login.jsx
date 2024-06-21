import { useState, useContext } from "react";
import React from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)



  const handleSubmit = (event) => {
    event.preventDefault()
    setUser({username ,password})
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      {" "}
      <input type="text" placeholder="password" 
        value={password}
        onChange={(event)=>{
            setPassword(event.target.value);
        }}
      
      />
      {" "}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
