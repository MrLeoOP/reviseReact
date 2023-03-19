import React from "react";
import "./css/Card.css"

const Card=(props)=>{
    return(
        <div className="container">
            <div className="cards">
           <div className="card">
            <img src={props.imgsrc}></img>
            <h1>{props.name}</h1>
            <button>Watch Now</button>
           </div>
        </div>
        </div>
        
            

    )
}

export default Card