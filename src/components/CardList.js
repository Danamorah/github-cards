import React from 'react'
import Card from './Card'
import testData from '../testData'

const CardList = () => {
  return(
    <div>
      {testData.map((profile) =>
        <Card key={profile.avatar_url} {...profile}/>)}
      {/* <Card {...testData[0]} /> */}
      {/* when we use the spread operator in an object like this in the react component 
        all te properties of that object will become props for this component */}
    </div>
  )
}
export default CardList