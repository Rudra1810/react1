import React, { Component } from 'react'


class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'InnnoBrain'
        }

        console.log('Lifecycle B Constructor from Constructor')
    }

    static getDerivedStateFromProps(props,status)
    {
        console.log("Lifecycle B method from getDerivedStateFromProp")
        return null
    }

    componentDidMount()
    {
        // setTimeout(() => {
        //     this.setState({ name: 'InnoBrain' });
        // }, 2000);
        console.log("Liifecycle  B from componentDidMount")
    }

    shouldComponentUpdate()
    {
        console.log("Lifecycle is B from shouldComponentUpdate Method")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("Lifecycle is B from getSnapshotBeforeUpdate Method")
        return null
    }

    componentDidUpdate()
    {
        console.log("Lifecycle is B from componentDidUpda")
    }

 
    render() {

        return (            
            <div>
             <h2> LIfecycle B from render method</h2>
            
            </div>
        )
    }
}

export default LifecycleB
