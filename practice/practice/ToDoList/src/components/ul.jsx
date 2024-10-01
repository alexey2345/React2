import Li from "./li"
import { useState } from "react";

function List( ){
    
    const [inputValue, setInputValue] = useState('');
    const listArr = {}
    function Push(){
    listArr.push(inputValue)}
    return(
        <>
        <input type="text"
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
        />
        <button onClick={Push}>submit</button>
        <ul id = 'ul'/>

        </>
    )
}

export default List 