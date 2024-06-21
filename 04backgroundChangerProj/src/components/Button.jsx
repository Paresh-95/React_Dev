import React from "react";


//Always remember to handle the props 
// for example I forget to handle the onClick Prop here 
function button({color,text="black", onClick}) {
  return (
    <>
      <button
        className="outline-none px-4 p-1 rounded-full border-slate-950"
        style={{ backgroundColor: color, color:text}}
        onClick={onClick}
      >
        {color}
      </button>
    </>
  );
}

export default button;
