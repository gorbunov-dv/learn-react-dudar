import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Example from './Example';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App /><Example /></div>, document.getElementById('root'));
registerServiceWorker();
