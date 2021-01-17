import React from 'react';
import testData from '../testData';
import CardList from './CardList'
import Form from './Form'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profiles: testData
    }
  }
  render(){
    return (
      <>
      <div className="header">{this.props.title}</div>
      <Form/>
      <CardList profiles={testData}/>
      </>
    ) 
  }
}

export default App