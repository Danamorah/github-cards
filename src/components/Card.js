import React from 'react'
import testData from '../testData'


class Card extends React.Component {

  render(){
    const profile = testData[0]
    return(
      <div className="github-profile">
        <img src={profile.avatar_url}/>
        <div className="info" >
          <div className="name">Name</div>
          <div className="company">Company</div>
        </div>
      </div>
    ) 
  }
}

export default Card