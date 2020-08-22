import React from 'react';
import './App.css';
import {rerender} from "./index";
import SearchForm from "./components/SearchForm";
import CardList from "./components/CardList";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";

export let allRepo = [];

export let store = createStore(rootReducer, {
  selected: {
    name: '',
    language: 'java',
    status: false
  },
  repo: []
}, applyMiddleware(thunk))


// let getAllRepo = (name, language, status) => {
//   let url = `https://api.github.com/search/repositories?q=${name}+language:${language}+is:${status ? 'private' : 'public'}&sort=stars&order=desc&`;
//   console.log(url)
//   return fetch(url)
//     .then(response => response.json())
//     .then(item => {
//       allRepo = item.items;
//       rerender();
//     });
// }

function App() {
  return (
    <div className="App">
      <SearchForm/>
      <CardList allRepo={store.getState().repo}/>
    </div>
  );
}

export default App;