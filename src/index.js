import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/main.css';

import HelloWorld from './components/hello_world';
import reducers from './reducers';

// redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware()
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={HelloWorld} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('app'));
