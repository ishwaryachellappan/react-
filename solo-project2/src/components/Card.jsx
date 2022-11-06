import React from "react"



export default function Card(props) {
    
    
    return (
        <div class="column1"> 
  <div class="row1">
        <div className="card">
            <div class="row">
  <div class="column" >
            <img 
                src={`../src/assets/${props.imageUrl}`} 
                className="card--image" 
            />
            </div>
            <div class="column" >
            <div className="card--stats">
                
                <p> {props.location}</p>
                
                
            </div>
            <p className="gray">{props.title} </p>
            <p >{props.startDate} To {props.endDate}</p>
            <p className="card--price">
                <span className="bold">{props.description}</span> 
            </p>
            </div>
</div>
        </div>
        </div>
        </div>
    )
}



