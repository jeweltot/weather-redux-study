import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import ReduxPromis  from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromis)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
