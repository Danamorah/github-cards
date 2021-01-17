import React from 'react'
import Card from './Card'

const CardList = (props) => {
  return(
    <div>
      {props.profiles.map((profile, index) =>
        <Card key={index} {...profile}/>)}
      {/* <Card {...testData[0]} /> */}
      {/* when we use the spread operator in an object like this in the react component 
        all te properties of that object will become props for this component */}
    </div>
  )
}
export default CardList