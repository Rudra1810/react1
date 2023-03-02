// import React from 'react'

// function Column() {
//   return (
//     <React.Fragment>
//         <td>Name</td>
//         <td>Rudra</td>
//     </React.Fragment>
//   )
// }

// export default Column

import React, { Component } from 'react'

export class column extends Component {
  render() {
    return (
    <React.Fragment>
    <td>Name</td>      
    <td>Rudra</td>
    </React.Fragment>
    )
  }
}

export default column