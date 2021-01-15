import React from 'react';
//import '../../main.css'
import Card from './Card'

class App extends React.Component {
  render(){
    return (
      <>
      <div className="header">{this.props.title}</div>
      <Card/>
      </>
    ) 
  }
}

export default App

// export default function App({title}) {
//   return (
//     <div className="header">{title}</div>
//   );
// }