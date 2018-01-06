import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const Stars=(props)=>{
    let numberOfStars=props.numberOfStars
    let stars=[];
    for (let i=0;i<numberOfStars;i++){
        
        stars.push(<i key={i} className="glyphicon glyphicon-star"></i>);
    }
    return (
        <div className="col-xs-5 col-sm-5">
          {stars}
       
          

        </div>
    )
}