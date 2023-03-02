import React, { Component } from 'react'

class refsold extends Component {
 
    constructor(props) {
        super(props)

        this.cbef=null
        this.setCBRef=element=>{
            this.cbRef=element
        }

    }
    componentDidMount(){
            if(this.cbRef)
            this.cbRef.focus()
    }

    clickHandler = () =>{
        alert(this.inputref.current.value)
    }

    render(){
        return (
            <div>
           <input type="text" ref={this.inputCBRef}/>
            <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
export default refsold