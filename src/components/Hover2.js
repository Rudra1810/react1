import React, { Component } from 'react'

export class Hover2 extends Component {
  render() {
    const{count,increamentCount}=this.props
    return <button onMouseOver={increamentCount}>Repeat {count} times</button>
  }
}

export default Hover2