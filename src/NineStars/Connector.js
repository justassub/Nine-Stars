import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Stars } from './Stars';
import {Button} from './Button';
import {Answer} from './Answer';
import {Numbers} from './Numbers';


var numberOfStars1=Math.random()*9+1;
var fn=require('array-reduce-sum');
export class Connector extends React.Component{
     
     
    state={
        numberOfStars:numberOfStars1,
        selectedNumbers:[],      
        
    }
    
    selectNumber=(clickedNumber)=>{
        
        this.setState(prevState=>(            
            {selectedNumbers:prevState.selectedNumbers.concat(clickedNumber)}
            
        ));
        
    }

    removeNumber=(clickedNumber)=>{
        var array=this.state.selectedNumbers;
        var index=array.indexOf(clickedNumber);
        delete array[index];
        this.setState(prevState=>(
            {selectedNumbers:array}
        ))
    }

    render(){
        const {selectedNumbers,numberOfStars,sum}=this.state;
        return(
            <div className="container"> 
                <h3>Play Nine</h3>
                <hr/>
              
                <div className="row">
                <Stars numberOfStars={Math.round(numberOfStars)}/>
                <Button  selectedNumbers={selectedNumbers}
                numberOfStars={Math.round(numberOfStars)} />
                <Answer removeNumber={this.removeNumber} 
                selectedNumbers={this.state.selectedNumbers}
               />
                </div>
                <br />
                <Numbers  removeNumber={this.removeNumber} selectNumber={this.selectNumber} selectedNumbers={this.state.selectedNumbers}/>
                <h1>{this.state.selectedNumbers}suma</h1>

            </div>
        )
    }
}