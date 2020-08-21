import React from 'react';
import './App.css';
import {rerender} from "./index";
import Card from "./components/Card";
import SearchForm from "./components/SearchForm";
import CardList from "./components/CardList";

export let allRepo = [];

export let requestParam = {
  name: '',
  language: 'C',
  status: false
}

export let getAllRepo = (name, language, status) => {
  let url = `https://api.github.com/search/repositories?q=${name}+language:${language}+is:${status ? 'private' : 'public'}&sort=stars&order=desc&`;
  console.log(url)
  return fetch(url)
    .then(response => response.json())
    .then(item => {
      allRepo = item.items;
      rerender();
    });
}


export function selectCriteria(e) {
  let name = e.target.name;
  let value = e.target.value;
  if (name === 'status') {
    value = e.target.checked;
  }
  requestParam[name] = value;
  rerender()
}

export function inputRepoName(e) {
  requestParam.name = e.target.value;
  rerender();
}


function App() {
  return (
    <div className="App">
      <SearchForm/>
      <CardList allRepo={allRepo}/>
    </div>
  );
}

export default App;