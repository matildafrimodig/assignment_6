import React from 'react'

export default function OrderByAlphaButton(props){
  return(

    <button className = "btn btn-success mt-3" onClick={() => {props.orderByAlpha()}}> Alfabetisk ordning </button>
  )
}
