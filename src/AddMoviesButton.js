import React from 'react'

export default function AddMovieButton(props){
  return(

    <button className = "btn btn-success mt-3" onClick={() => {props.addItem()}}> Lägg till film </button>
  )
}
