import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

