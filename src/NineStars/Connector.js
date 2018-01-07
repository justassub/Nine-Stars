import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Stars } from './Stars';
import {Button} from './Button';
import {Answer} from './Answer';
import {Numbers} from './Numbers';


var numberOfStars=1+Math.floor(Math.random()*9);
var fn=require('array-reduce-sum');
export class Connector extends React.Component{
     
     
    state={
        numberOfStars:numberOfStars,
        selectedNumbers:[],    
        answerIsCorrect :null,
        usedNumbers:[]
        
    }
    
    selectNumber=(clickedNumber)=>{
        
        this.setState(prevState=>( {
                answerIsCorrect:null,
                selectedNumbers:prevState.selectedNumbers.concat(clickedNumber)}
            
        ));
        
    }

    removeNumber=(clickedNumber)=>{
        var array=this.state.selectedNumbers;
        var index=array.indexOf(clickedNumber);
        delete array[index];
        this.setState(prevState=>(
            {
                answerIsCorrect:null,
                selectedNumbers:array}
        ))
    }
    

    checkAnswer =()=>{
        
      this.setState(prevState=>(
          {answerIsCorrect:prevState.numberOfStars===
            prevState.selectedNumbers.reduce((acc,n)=>acc+n,0)}));      
       
    };

    acceptAnswer=()=>{
        this.setState(prevState=>({
            usedNumbers:prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers:[],
            answerIsCorrect:null,
            numberOfStars:1+Math.floor(Math.random()*9)
        }))
    }

    render(){
        const {selectedNumbers,numberOfStars,answerIsCorrect,usedNumbers}=this.state;
        const suma = selectedNumbers.reduce((acc,n)=>acc+n,0)

        
        return(
            <div className="container"> 
                <h3>Play Nine</h3>
                <hr/>
              
                <div className="row">
                <Stars numberOfStars={Math.round(numberOfStars)}/>
                <Button 
                acceptAnswer={this.acceptAnswer}                
                checkAnswer={this.checkAnswer} 
                answerIsCorrect={answerIsCorrect}
                selectedNumbers={selectedNumbers}
                numberOfStars={Math.round(numberOfStars)} />
                <Answer removeNumber={this.removeNumber} 
                selectedNumbers={this.state.selectedNumbers}
               />
                </div>
                <br />
                <Numbers 
                usedNumbers={usedNumbers}
                 removeNumber={this.removeNumber} selectNumber={this.selectNumber} selectedNumbers={this.state.selectedNumbers}/>
             

            </div>
        )
    }
}