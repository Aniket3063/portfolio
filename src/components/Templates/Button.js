import React  from 'react'
import './Button.css'

export default function Button(props) {



  return (
    <div className='btn' id={props.id} style={{ width: parseInt(props.size) * 7.7 + "px" }} >
      
      <div className="button" style={{ borderRadius: parseInt(props.size) * 0.3 + "px" }}>
        <a href={props.link} target={(props.target === "_blank")?"_blank":""} rel="noreferrer"
          style={{
            fontSize: props.size + "px",
            padding: (parseInt(props.size) * 0.923 )+ "px " +  (parseInt(props.size) * 1.230) + "px",
            borderRadius: parseInt(props.size) * 0.3 + "px"
          }}>
          {props.name}
        </a>
      </div>
    </div>
  )
}
