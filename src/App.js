import React from 'react';
import SearchForm from "./components/SearchForm";
import RepoList from "./components/RepoList";

function App() {
  return (
    <div className='container-fluid'>
      <div className='col'>
        <SearchForm />
        <RepoList />
      </div>
    </div>
  );
}

export default App;