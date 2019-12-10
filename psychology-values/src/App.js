import React, { useState, useEffect } from 'react';
import './App.css';
import DecisionComponent from './components/decisionComponent'
import ResultComponent from './components/resultComponent'
import data from './data/cards.json';

function App() {

  const [title, setTitle] = useState("testtitle");
  const [info, setInfo] = useState("testinfo");
  const [dataArray, setDataArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstDataArray, setFirstDataArray] = useState([]);
  const [level, setLevel] = useState(1);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    function parseJson() {
      console.log("done");
      for (let x of data.values) {
        let a = x;
        let b = "-";
        if (x.includes("(")) {
          let q = x.split("(");
          a = q[0];
          b = q[1].replace(")", "");
        }
        let obj = {
          "title": a,
          "info": b,
        }
        const temp = dataArray;
        temp.push(obj);
        setDataArray(temp);
        setTitle(dataArray[currentIndex].title);
        setInfo(dataArray[currentIndex].info);
      }
    }
    parseJson();
  }, []);


  function setImportance(importance) {
    if (importance) {
      const arr = firstDataArray;
      arr.push(dataArray[currentIndex]);
      setFirstDataArray(arr);
    }
    
    if (currentIndex+1 === dataArray.length) {
      if (level === 2) {
        setShowResult(true);
      }
      setLevel(level + 1);
      setCurrentIndex(0);
      setDataArray(firstDataArray);
      setTitle(firstDataArray[0].title);
      setInfo(firstDataArray[0].info);
      setFirstDataArray([]);
    } else {
      setTitle(dataArray[currentIndex+1].title);
      setInfo(dataArray[currentIndex+1].info);
      setCurrentIndex(() => currentIndex+1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          showResult ?
            <>
              {"Important for you"}
              <ResultComponent list={dataArray}/>
            </>
            :
            <>
              {"Level " + level}
              <DecisionComponent title={title} info={info} important={setImportance} />
              {"Progress: " + (currentIndex+1) + " / " + dataArray.length}
            </>
        }
      </header>
    </div>
  );
}

export default App;
