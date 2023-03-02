import React, { useState } from 'react'

function Hook3() {

    const initialcount = 0
    const [count, setCount] = useState(initialcount)
    const incrFive = () => {
        {
            setCount(myprev => myprev + 5)
        }
    }
    return (
        <div>
            Count:{count}<br></br><br></br>
            <button onClick={() => setCount(initialcount)}>Reset</button><br></br><br></br>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increament</button><br></br><br></br>
            <button onClick={() => setCount( prevCount => prevCount - 1)}>Decreament</button><br></br><br></br>
            <button onClick={incrFive}>Increment5</button>
        </div>
    )
}
export default Hook3
