import { useState } from "react";
import "./App.css";

function App() {
  const purple = "#A02F0"
  const [bg, setBg] = useState(purple);
  const [btext,setBtext] = useState("Hi Click Me")
  const [src,setSrc] = useState("https://media1.tenor.com/m/UmZtwIg5-E4AAAAd/hrithik-roshan-hi.gif")

  const bgChange = () => {
    const sage = "#B0C5A4"
    setBg(sage)
    setBtext("Datt Teri 😠 " )  
    setSrc("https://media1.tenor.com/m/-OT7ppqQOvcAAAAC/dhat-teri-maa-ki-nawazuddin-siddiqui.gif")
  };

  const bgChange1 = () => {
    const lyellow = "#FFF3C7"
    setBg(lyellow)
    setBtext("Sorry Sorry Sorry 🙏🙏 " ) 
    setSrc("https://media1.tenor.com/m/cX94qfKoU6EAAAAC/rahul-gandhi-sorry.gif")
  };



  return (
    <>
      <div style={{backgroundColor:{bg}}}>
        <img src={src} alt="funny gif" />
        <button onClick={bgChange} onDoubleClick={bgChange1}>{btext}</button>
      </div>
    </>
  );
}

export default App;
