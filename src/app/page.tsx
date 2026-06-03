"use client";

import { useState } from "react";
import calculate from "./Components/calculate";

export default function Home(){
  const [display,setDisplay]=useState("");
  const [prev,setPrev]=useState<number | null>(null)
  const [operator, setOperator]=useState<string | null>(null)
  const [isReadyfornewInput,setIsReadyfornewInput]=useState(false)
  const [scientific,setScientific]= useState(false)
  const [isHidden,setIshidden]=useState(true)

  const handleClick =(value: string ) =>{
    const operator=["+","-","*","/"];
    const lastChar =display[display.length-1]

    if(operator.includes(value) && operator.includes(lastChar)){
      setDisplay((prev)=> prev.slice(0,-1))
    }
    setDisplay((prev)=> prev+value)
  }

  const handleCalculate = () => {
    calculate({ display, operator, setDisplay });
  };

  const clear=()=>{
     setDisplay("")
  }

  const advOperation=(value:string)=>{
    if(value==="sin"){
      setOperator("sin")
    //  setDisplay(value)
    }
  }
   
  return(
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center border rounded-xl p-6 shadow-md">

      <div className="grid grid-cols-3 text-3xl font-bold mb-5 ">
      <button className="gap-4 align-left"
      onClick={()=>setIshidden(!isHidden)} >☰</button>

      <h1>
        Scientific Calculator
        </h1>
      </div>
      <input
      type="text"
      value={display}
      readOnly
     className="border p-3 w-80 text-right text-2xl"/>

     <div className="grid grid-cols-4 gap-2 mt-4">
     
      <button className="gap-3 p-3 border rounded-full w-18" onClick={()=>handleClick("7")}>7</button>
      <button className="gap-3 p-3 border rounded-full" onClick={()=>handleClick("8")}>8</button>
      <button className="gap-3 p-3 border rounded-full" onClick={()=>handleClick("9")}>9</button>
      <button className="gap-3 p-3 border rounded-full" onClick={()=>handleClick("/")}>/</button>

      <button className="gap-3 p-3 border rounded-full" onClick={()=>handleClick("4")}>4</button>
      <button className="gap-3 p-3 border rounded-full" onClick={()=>handleClick("5")}>5</button>
      <button className="gap-3 p-3 border rounded-full" onClick={()=>handleClick("6")}>6</button>
      <button className="gap-3 p-3 border rounded-full" onClick={()=>handleClick("*")}>*</button>

      <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("1")}>1</button>
  <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("2")}>2</button>
  <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("3")}>3</button>
  <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("-")}>-</button>

  <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("0")}>0</button>
  <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick(".")}>.</button>
  <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("+")}>+</button>

  <button className={`gap-3 p-3 border rounded-full ${isHidden ? 'hidden' : ''}`} onClick={() => advOperation("sin")}>sin</button>
  <button className={`gap-3 p-3 border rounded-full ${isHidden ? 'hidden' : ''}`} onClick={() => advOperation("cos")}>cos</button>
  <button className={`gap-3 p-3 border rounded-full ${isHidden ? 'hidden' : ''}`} onClick={() => advOperation("tan")}>tan</button>
  <button className={`gap-3 p-3 border rounded-full ${isHidden ? 'hidden' : ''}`} onClick={() => advOperation("sqrt")}>sqrt</button>
  

     </div>
     <div className="flex justify-between gap-4 m-4">
     <div className="w-16 h-16 rounded-full bg-blue-500 text-white text-xl flex items-center justify-center">
      {/* //calculation button */}
      <button onClick={handleCalculate}>=</button>
      </div>
      <div className="w-16 h-16 rounded-full bg-orange-500 text-white text-xl flex items-center justify-center">
      <button onClick={clear}>C</button>
      </div>
     </div>
      </div>
    </div>
  );
}