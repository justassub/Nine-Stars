import React from 'react'

export class Button extends React.Component{

    handleclick=(props)=>{
        this.props.onClickFunction(this.props.incrementValue)
    }
 

    render(){
        return(
            <div>
            <button onClick={this.handleclick}>{this.props.incrementValue} </button>
            
            </div>
    )

    }
}