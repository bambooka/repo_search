import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;