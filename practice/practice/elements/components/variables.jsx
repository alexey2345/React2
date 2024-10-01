import { useState } from "react";

function variables({
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    initialCounter = 0,
    
  }){
    if (min > max) {
        throw new Error(
          `the props value min (${min}) is bigger than max (${max}). minimum value must be smaller than max value`
        );
      }
    
      if (initialCounter < min || initialCounter > max) {
        throw new Error(
          `the props initialCounter (${initialCounter}) must be between the values of min (${min}) and max (${max})`
        );
      }
    
      const [counter, setCounter] = useState(initialCounter);
    
      const isMax = counter >= max;
      const isMin = counter <= min;
    
      
    return isMin ,isMax ,setCounter ,initialCounter
}
export default variables