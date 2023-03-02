import React,{useState} from 'react'

function HookCounter() {
    const [count,setCount]=useState(0,0)

  return (
    <div>
        <button onClick={ () => setCount(count+1) }>Count</button>
    </div>
  )
}

export default HookCounter
