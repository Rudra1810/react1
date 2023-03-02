import React from 'react'
import './Mystyle.css';

// function Stylesheet()
// {
//     return( <div>
//         <h1 class='primary'>this is my style</h1>
//     </div>)
// }

function Stylesheet(props)
{
    let className=props.primary ? 'primary' :''
    return(
         <div>
        <h1 className={className}> this is my style </h1>
    </div>)
}


export default Stylesheet