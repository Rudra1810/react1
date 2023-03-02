// rfce rce
import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
        username:'',
        comments:'',
        topic:'react'
    }
   }
   handleUserNameChange=(event)=>{
    this.setState({
        username:event.target.value
    })
   }

   handleCommentsChange=(event)=>{
    this.setState({
        comments:event.target.value
    })
   }

   handleTopicChange=(event)=>{
    this.setState({
        topic:event.target.value
    })
   }

   handleSubmit =event=>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `)
   }

   render(){
      //const {username,comments,topic}=this.state

      return(
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>username</label>
                <input type="text" value={this.state.username} onChange={this.handleUserNameChange}/>
            </div>

            <div>
                <label>comments</label>
                <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
            </div>

            
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="react"> React</option>
                    <option value="angular"> Angular</option>
                    <option  value="Vue"> Vue</option>
                </select>

            </div>

            <button type="submit">submit</button>

        </form>
        
      )

   }
}

export default Form
