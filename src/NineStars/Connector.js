import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Stars } from './Stars';
import {Button} from './Button';
import {Answer} from './Answer';
import {Numbers} from './Numbers';
import { DoneFrame } from './DoneFrame';


var numberOfStars=1+Math.floor(Math.random()*9);
var fn=require('array-reduce-sum');
export class Connector extends React.Component{

   randomNumber=()=>
        1+Math.floor(Math.random()*9);
    
     
     
    state={
        numberOfStars:this.randomNumber(),
        selectedNumbers:[],    
        answerIsCorrect :null,
        usedNumbers:[],
        repeats:5,
        doneStatus:null,
        
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
            numberOfStars:this.randomNumber()
           
        }),this.updateStatus)
    };
    redraw=()=>{
        if (this.state.repeats>0){
        this.setState(({
            numberOfStars:this.randomNumber(),   
            answerIsCorrect:null,
            selectedNumbers:[],
            repeats:this.state.repeats-1
        }),this.updateStatus)
    }
        
    }
     possibleCombinationSum = function(arr, n) {
        if (arr.indexOf(n) >= 0) { return true; }
        if (arr[0] > n) { return false; }
        if (arr[arr.length - 1] > n) {
          arr.pop();
          return this.possibleCombinationSum(arr, n);
        }
        var listSize = arr.length, combinationsCount = (1 << listSize)
        for (var i = 1; i < combinationsCount ; i++ ) {
          var combinationSum = 0;
          for (var j=0 ; j < listSize ; j++) {
            if (i & (1 << j)) { combinationSum += arr[j]; }
          }
          if (n === combinationSum) { return true; }
        }
        return false;
      };

    noPossibleSollutions=(numberOfStars,usedNumbers)=>{
        const possbleNumbers=Array.from(Array(10).keys());
        const chooseFrom=[];

        for (let i=1;i<possbleNumbers.length;i++){
            if (!possbleNumbers.includes(i)){
                chooseFrom.concat(i);
            }
        }

        return this.possibleCombinationSum(chooseFrom,numberOfStars);
    }

    updateStatus=()=>{        
        this.setState(prevState=>{
            if(prevState.usedNumbers.length===9){
                return {doneStatus:"DONE! Well played"}
                
        }    
        if (prevState.repeats===0 && !this.noPossibleSollutions(prevState)){
            return{doneStatus:"Game Over. You lost"}
        }      
        })
    }
       

    render(){
        const {selectedNumbers,numberOfStars,answerIsCorrect,usedNumbers,repeats,doneStatus}=this.state;
        const suma = selectedNumbers.reduce((acc,n)=>acc+n,0)

        
        return(
            <div className="container"> 
                <h3>Play Nine</h3>
                <hr/>
              
                <div className="row">
                <Stars numberOfStars={Math.round(numberOfStars)}/>
                <Button 
                repeats={repeats}
                redraw={this.redraw}
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

                {doneStatus?
                <DoneFrame doneStatus={doneStatus}/>:
                <Numbers 
                usedNumbers={usedNumbers}
                 removeNumber={this.removeNumber} selectNumber={this.selectNumber} selectedNumbers={this.state.selectedNumbers}/>
             
                }

            </div>
        )
    }
}