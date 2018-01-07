import React, { version } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export var DoneFrame =(props)=>{
    return(
        <div>
        <h2 className="text-center">{props.doneStatus}</h2>
        </div>
    );
}