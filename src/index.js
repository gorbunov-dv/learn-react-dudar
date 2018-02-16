import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Example from './Example';
import Task from './Task';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App />
        <Example name="Forza" age="18+" />
        <Example name="Contra" age="6+" />
        <div>Testing</div>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
