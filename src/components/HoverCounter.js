import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
  render() {
    const {count,increamentCount}=this.props
    return (
      <div>
        <h2 onMouseOver={increamentCount}> Hovered {count} times</h2>
{/* 
        <button onMouseOver={increamentCount}>Click {count} times</button> */}
      </div>
      
    )
  }
}

export default UpdatedComponent(HoverCounter)