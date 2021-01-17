import React from 'react';
import CardList from './CardList'
class App extends React.Component {
  render(){
    return (
      <>
      <div className="header">{this.props.title}</div>
      <CardList/>
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