import React, { Component } from 'react'
// import LifecycleB from './componts/LifecycleB'

// import LifecycleB from '/LifecycleB'

import LifecycleB from './LifecycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'InnnoBrain'
        }

        console.log('Lifecycle A Constructor from Constructor')
    }

    static getDerivedStateFromProps(props,status)
    {
        console.log("Lifecycle A method from getDerivedStateFromProp")
        return null
    }

    componentDidMount()
    {
        setTimeout(() => {
            this.setState({ name: 'InnoBrain' });
        }, 2000);
        console.log("Liifecycle  A from componentDidMount")
    }

    shouldComponentUpdate()
    {
        console.log("Lifecycle is A from shouldComponentUpdate Method")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("Lifecycle is A from getSnapshotBeforeUpdate Method")
        return null
    }

    componentDidUpdate()
    {
        console.log("Lifecycle is A from componentDidUpda")
    }

    changeState =() =>
    {
        this.setState({
            name:'coding'
        })
    }

    render() {

        return (            
            <div>
             <h2> LIfecycle A from render method</h2>
             <button onclick={this.changeState}>change stae</button>
             <LifecycleB/>
            </div>
        )
    }
}

export default LifeCycleA


