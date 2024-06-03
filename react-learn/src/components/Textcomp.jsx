import { useState } from "react";
import React from 'react';

const Textcomp = () => {
    const [value, setValue] = useState("TEXT")
  return (
    <div>
        <h1>{value}</h1>
        <input type="text" value={value} onChange={event => setValue(event.target.value)}></input>
    </div>
  )
}

export default Textcomp