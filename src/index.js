import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Site from './Site';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Site />, document.getElementById('root'));
registerServiceWorker();
