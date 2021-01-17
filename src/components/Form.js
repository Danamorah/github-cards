import React from 'react'
import axios from 'axios'

class Form extends React.Component {
  state = {
    userName: ""
  }
  //userNameInput = React.createRef();
  handleSubmit = async (event) => {
    event.preventDefault()
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    console.log(
      this.state.userName,
      resp.data
    )
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
         <input 
         type="text" 
         placeholder="Github username"
         value={this.state.userName}
         onChange={event => this.setState({ userName: event.target.value})} 
         //ref={this.userNameInput} 
         required/>
         <button>Add card</button>
      </form>
    )
  }
}

export default Form