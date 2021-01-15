import React from 'react'

class Card extends React.Component {
  render(){
    return(
      <div className="github-profile" >
        <img src="https://placehold.it/75"/>
        <div className="info">
          <div className="name">Name</div>
          <div className="company">Company</div>
        </div>
      </div>
    ) 
  }
}

export default Card