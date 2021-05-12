import React from 'react'

export default function Movie(props){

let stars = []

for(let i=0 ; i< props.item.grade ; i++){

  stars.push(<img src = "../grade.png" alt="Star" key={i}/>)
}

  return(

    <li className ="list-group-item">
      {props.item.title}
      {stars}
      <img alt = "delete" src= "../delete.png" onClick = {() => {props.deleteItem(props.item.id)}}/>

    </li>
  )
}
