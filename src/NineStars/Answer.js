import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Answer =(props)=>{
    return (
        <div className="col-xs-2 col-sm-5">
           {props.selectedNumbers.map(
               (number,i)=>
               <span key={i}
               onClick={()=>props.removeNumber(number)}>{number}</span>
           )}
        </div>
    )
}