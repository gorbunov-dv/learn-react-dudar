import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Example from './Exapmle';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Example />, document.getElementById('examle'));
registerServiceWorker();
