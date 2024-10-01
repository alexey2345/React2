import { useState } from 'react'
import './App.css'
import WindowSize from './windowSize'

function App() {
  const [isShow,setIsShow] = useState(false)
const display=()=>{
setIsShow((isShow)=>!isShow)
  
}

  return (
    <>

<button className='btn btn-primary' onClick={display}>click</button>
{!isShow ? null : <WindowSize />}
</>
  )
}

export default App
