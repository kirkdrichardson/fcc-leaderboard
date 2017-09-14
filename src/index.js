import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CamperTable from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CamperTable />, document.getElementById('root'));
registerServiceWorker();
