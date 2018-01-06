import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



export var Button =(props)=>{
    
    var skaiciai=props.selectedNumbers
    var stars=props.numberOfStars
      

    var calculateSum=()=>{
        let suma=0;
        for (let i=0;i<skaiciai.length;i++){
            suma=suma+skaiciai[i]           
        }
        
        if (stars==suma){
           alert ("YOU WON")
        }else {
            alert("you suck")
            console.log(suma,stars)
        }
       
    }  
        
    
        
    


    return (
        <div className="col-xs-5 col-sm-1 " >
            <button 
            disabled={props.selectedNumbers.length===0}
            onClick={calculateSum}
            
            className="glyphicon glyphicon-ok"></button>
           
        </div>
    )
}