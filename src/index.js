import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import store from './redux/state';
import reportWebVitals from './reportWebVitals';
import './index.css';

const refreshEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={store.addPost.bind(store)}
          updatePost={store.updatePost.bind(store)}
          addMessage={store.addMessage.bind(store)}
          updateMessage={store.updateMessage.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

refreshEntireTree(store.getState());

store.subscribe(refreshEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
