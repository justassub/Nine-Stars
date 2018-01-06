import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Connector } from './NineStars/Connector';



ReactDOM.render(<Connector />
    , document.getElementById('root'));

registerServiceWorker();
