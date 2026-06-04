"use client";

import { useState } from "react";
import calculate from "./Components/calculate";
import backspace from "./Components/Backbutton";

export default function Home() {
  const [display, setDisplay] = useState("");
  const [prev, setPrev] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [isHidden, setIshidden] = useState(true)

  const handleClick = (value: string) => {
    const operator = ["+", "-", "*", "/"];
    const lastChar = display[display.length - 1]
    // if someone clicked +, -,/ when display"""
    if(display.length===0 ){
      if(operator.includes(value)){
      setDisplay("0"+value) 
      return
      }
    }
    // for consecutivie operators validaton eg 10+- => 10-
    if (operator.includes(value) && operator.includes(lastChar)) {
      setDisplay((prev) => prev.slice(0, -1) + value)
    } else { setDisplay((prev) => prev + value) }
  }

  const handleCalculate = () => {
    calculate({ display, operator, setDisplay });
  };

  const handleBackspace = () => {
    backspace({ display, setDisplay });
  };
  const clear = () => {
    setDisplay("0")
  }

  const advOperation = (value: string) => {
    if (value === "sin" || value === "cos" || value === "tan" || value === "sqrt" || value === "^" || value === "!") {
      setOperator(value)
      if(value!=="!"){
        setDisplay((prev) => prev + value + "(")
      }else{
        setDisplay((prev)=> prev+value)
      }
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center border rounded-xl p-6 shadow-md">

        <div className="grid grid-cols-3  ">
          <button className="gap-4 align-left text-3xl font-bold mb-5"    // col 1
            onClick={() => setIshidden(!isHidden)} //initially true then when clicked -> false 
          >☰
          </button>

          <h1 className="text-xl font-bold mb-5">
            Scientific Calculator
          </h1>
          <h3 className="flex text-s border items-center justify-center w-30 h-10 text-bold bg-gray-500 mb-5">
            {isHidden ? "Basic mode" : "Scientific mode"}
          </h3>
        </div>
        <input
          type="text"
          value={display}
          readOnly
          className="border p-3 w-80 text-right text-2xl" />

        <div className="grid grid-cols-4 gap-2 mt-4">

          <button className="gap-3 p-3 border rounded-full w-18" onClick={() => handleClick("7")}>7</button>
          <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("8")}>8</button>
          <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("9")}>9</button>
          <button className="gap-3 p-3 border rounded-full " onClick={() => handleClick("/")}>/</button>

          <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("4")}>4</button>
          <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("5")}>5</button>
          <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("6")}>6</button>
          <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("*")}>*</button>

          <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("1")}>1</button>
          <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("2")}>2</button>
          <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("3")}>3</button>
          <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("-")}>-</button>

          <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("0")}>0</button>
          <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick(".")}>.</button>
          <button className="gap-3 p-3 border rounded-full" onClick={() => handleClick("+")}>+</button>
          <button className="gap-3 p-3 border rounded-full" onClick={handleBackspace}>❮</button>

          <button className={`gap-3 p-3 border rounded-full ${isHidden ? 'hidden' : ''}`} onClick={() => advOperation("sin")}>sin</button>
          <button className={`gap-3 p-3 border rounded-full ${isHidden ? 'hidden' : ''}`} onClick={() => advOperation("cos")}>cos</button>
          <button className={`gap-3 p-3 border rounded-full ${isHidden ? 'hidden' : ''}`} onClick={() => advOperation("tan")}>tan</button>
          <button className={`gap-3 p-3 border rounded-full ${isHidden ? 'hidden' : ''}`} onClick={() => handleClick(")")}>﹚</button>

          <button className={`gap-3 p-3 border rounded-full ${isHidden ? 'hidden' : ''}`} onClick={() => advOperation("sqrt")}>sqrt</button>
          <button className={`gap-3 p-3 border rounded-full ${isHidden ? 'hidden' : ''}`} onClick={() => advOperation("!")}>x!</button>
          <button className={`gap-3 p-3 border rounded-full ${isHidden ? 'hidden' : ''}`} onClick={() => advOperation("^")}>^</button>

        </div>
        <div className="flex justify-between gap-4 m-4">
          <div className="w-16 h-16 rounded-full bg-blue-500 text-white text-xl flex items-center justify-center">
            {/* //calculation button */}
            <button onClick={handleCalculate}>=</button>
          </div>
          {/* clear button */}
          <div className="w-16 h-16 rounded-full bg-orange-500 text-white text-xl flex items-center justify-center">
            <button onClick={clear}>C</button>
          </div>
        </div>
      </div>
    </div>
  );
}