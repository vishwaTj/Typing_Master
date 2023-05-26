import React from 'react';

import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App';
import {store} from "./store";

const ele = document.getElementById('root');
const root = ReactDOM.createRoot(ele);

root.render(
    <Provider store={store}>
       <App />
    </Provider>   
)