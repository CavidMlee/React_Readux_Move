import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';        //npm i redux-promise-middleware --save

const middleware = applyMiddleware(reduxPromise, thunk,logger)

const store = createStore(
    rootReducer,
    composeWithDevTools(
        middleware
    )
);

ReactDOM.render(
    <BrowserRouter>
        <div>                               {/* ---- Routerden istifade ede bilerik */}
            <Provider store={store}>                      {/* ---- Reduxdan istifade ede bilerik */}
                <App />
            </Provider>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



