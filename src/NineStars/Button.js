import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



export var Button =(props)=>{
    
    let button;
    switch(props.answerIsCorrect){
        case true:
        button=
        <button       
        onClick={props.acceptAnswer}        
        className="btn btn-success">
        <i className="fa fa-check"></i></button>
        break;
        console.log(props.answerIsCorrect)
        case false:
       button=
       <button 
       className="btn btn-danger"
       onClick={props.checkAnswer}>
       
       <i className="fa fa-times"></i>
       </button>
        console.log(props.answerIsCorrect)
        break;
        default:
        button=
        <button 
        disabled={props.selectedNumbers.length===0}
        onClick={props.checkAnswer}
        
        className="glyphicon glyphicon-ok">

        </button>
        console.log("suma",props.suma,"stars",props.numberOfStars,props.answerIsCorrect,"ar teisinga")
    }


    return (
        <div className="col-xs-5 col-sm-1 " >
            {button}
            <button 
             disabled={props.repeats===0}
            onClick={props.redraw}
            
            className ='glyphicon glyphicon-refresh'
            
            >{props.repeats}</button>
           
        </div>
    )
}