import React from 'react'

export default function OrderByGradeButton(props){
  return(

    <button className = "btn btn-success mt-3" onClick={() => {props.orderByGrade()}}> Sortera efter betyg </button>
  )
}
