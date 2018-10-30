import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import modules from './modules';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// 리덕스 스토어를 생성하고, Provider로 리액트 프로젝트에 적용...!
const store = createStore(modules, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
