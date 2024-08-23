import './App.css';
import React, { useEffect, useState } from 'react';
import LineChart from './component/lineChart';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
      fetch('http://127.0.0.1:5000/orders')
          .then(response => response.json())
          .then(data => setData(data));
        }, []);

        

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='div-header'>Data Visualisation</h1>
        <LineChart/>
      </header>
    </div>
  );
}

export default App;
