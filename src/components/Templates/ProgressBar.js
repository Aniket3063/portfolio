import React from 'react'
import './ProgressBar.css'

export default function ProgressBar(props) {
  return (
    
        <div className="candidates">
            <div className="partial">
                <div className="info">
                    <div className="name"> {props.name} </div>
                    <div className="percentage-num "> {props.value+" %"} </div>
                </div>

                <div className="progressBar">
                    <div className="percentagem" style = {{width: props.value+"%"}}> </div>
                </div>

            </div>
        </div>
      
    
  )
}
