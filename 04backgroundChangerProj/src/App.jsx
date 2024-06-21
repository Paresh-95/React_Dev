import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const [color, setColor] = useState("white");

  const handleButtonClick = (newColor) => {
    setColor(newColor);
  };


//Always remember to handle the props ex- onClick
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="flex justify-center">
        <Card username="LAMBORGHINI HURCAN" text="SuperCar by Lamborghini" link="https://images.pexels.com/photos/5288727/pexels-photo-5288727.jpeg?auto=compress&cs=tinysrgb&w=800"/>
        <Card username="FERRARI ENZO " text="SuperCar by Ferrari" link="https://images.pexels.com/photos/2664399/pexels-photo-2664399.jpeg?auto=compress&cs=tinysrgb&w=800" audio = "04backgroundChangerProj\src\assets\lambo-start-up-sound-26364.mp3" />
        <Card username="Royal Enfield Himalayan" text="Offroader Bike by Royal Enfield" link="https://bd.gaadicdn.com/processedimages/royal-enfield/himalayan-450/source/himalayan-4506565ccada995d.jpg" audio= "04backgroundChangerProj\src\assets\ferrari_cc942b1d4951689.mp3"  />
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-15 inset-x-0 px-2">
          <div
            className="flex flex-wrap justify-center gap-3 shadow-xl px-4 py-3 rounded-full"
            style={{ backgroundColor: "#DCBFFF" }}
            
          >
            
            <Button color="Red" onClick={() => handleButtonClick("red")} />
            <Button color="Green" onClick={() => handleButtonClick("green")} />
            <Button color="Blue" text="white" onClick={() => handleButtonClick("blue")}/>
            <Button color="Olive" onClick={() => handleButtonClick("olive")}/>
            <Button color="Gray" onClick={() => handleButtonClick("gray")}/>
            <Button color="Yellow" onClick={() => handleButtonClick("yellow")}/>
            <Button color="Pink" onClick={() => handleButtonClick("pink")}/>
            <Button color="Lavender" onClick={() => handleButtonClick("lavender")}/>
            <Button color="White" onClick={() => handleButtonClick("white")}/>
            <Button color="Black" text="white" onClick={() => handleButtonClick("black")}/>
            <Button color="orange" text="white" onClick={() => handleButtonClick("orange")}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
