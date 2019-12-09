import React, { useState } from 'react';
import './App.css';
import DecisionComponent from './components/decisionComponent'

function App() {

  const [title, setTitle] = useState("testtitle");
  const [info, setInfo] = useState("testinfo");

  function setImportance(importance) {
    console.log(importance);
  }

  return (
    <div className="App">
      <header className="App-header">
        <DecisionComponent title={title} info={info} important={setImportance} />
      </header>
    </div>
  );
}

export default App;
