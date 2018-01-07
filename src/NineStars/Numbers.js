import React, { version } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Numbers =(props)=>{
   const arrayOfNumbers=10;
   let numbers=[];
   let vertes=props.selectedNumbers
   let usedNumbers=props.usedNumbers;




    for (let i=1;i<arrayOfNumbers;i++){  
        if (vertes.includes(i)){
            numbers.push(<span key={i} 
                onClick={()=>props.removeNumber(i)}
                    className="selected" >{i}</span>);
        }else if (usedNumbers.includes(i)){
            numbers.push(<span key={i}                
            className="used" >{i}</span>);
        }
        else{
            numbers.push(<span key={i}
                onClick={()=>props.selectNumber(i)} >{i}</span>);
        }

   }
   

   
    return (
        <div className="thumbnail text-center">  
        <div>
            {numbers}
            </div>    
            
        </div>
    )
}