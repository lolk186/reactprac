import React from 'react';
import { useState } from "react";

const Counter = () => {
    const  [num, setnum] = useState(0);
    function minus(){
      setnum(num - 1)
  
    }
    function plus(){
      setnum(num + 1)
    }

  return (
    <>
    <h1>количевство {num}</h1>
    <button onClick={plus}>+</button>
    <button onClick={minus}>-</button>

    </>
  )
}

export default Counter