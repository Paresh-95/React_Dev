import "./App.css";
import React from "react";

function App() {
  let curDate = new Date();
  let curHr = curDate.getHours();
  let greeting = "";
  const cssStyle = {};
 

  if(curHr>=1 && curHr<12){
    greeting = "Good Morning"
    cssStyle.color = "#87A922"
  }
  else if(curHr>=12 && curHr<19)
  {
    greeting = "Good Afternoon"
    cssStyle.color = "orange"
  }
  else
  {
    greeting = "Good Night"
    cssStyle.color = "black"
  }
  
  

  
   
  return (
    <>
      <div>
      <h1 className="h1">
       Hello Sir , <span style={cssStyle}>{greeting}</span>
      </h1>,
      </div>
    </>
  );
}

export default App;
