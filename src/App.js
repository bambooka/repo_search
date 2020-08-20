import React from 'react';
import './App.css';
import {rerender} from "./index";

let allRepo = [];


let getAllRepo = () => {
  let url = 'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc';
  return fetch(url)
    .then(response => response.json())
    .then(item => {
      allRepo = item.items;
      rerender();
    });
}

function Card(props){
    return  <div key={props.index} style={{background: "lightblue"}}>
      <h1>{props.data.name}</h1>
      <p>{props.data.description}</p>
      <h4>{props.data.language}</h4>
      <h6>{props.data.private ? 'private' : 'public'}</h6>
    </div>

}

function App() {
  return (
    <div className="App">
      {allRepo.length > 0 ? allRepo.map((item, index) => <Card key={index} data={item}/>): <h1>no repo ;(</h1> }
      <div className='searchForm'>
        <input/>
        <div>
          <input type='checkbox'/>
          <input type='checkbox'/>
          <input type='checkbox'/>
        </div>
      </div>
      <div className='result'>
        <div>repo1</div>
        <div>repo2</div>
        <div>repo3</div>
      </div>

      <input type='button' onClick={getAllRepo} value='get repo'/>
    </div>
  );
}

export default App;