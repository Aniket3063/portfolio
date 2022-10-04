import React from 'react'
import './NumberHeading.css'


export default function NumberHeading(props) {
  return (
    <h2 className='number-heading'>
        <span className='green-color'>{props.number ? props.number+".":""}&nbsp; </span>
        {props.name}
    </h2>
  )
}
