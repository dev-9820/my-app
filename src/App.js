import './App.css';
import React, { useEffect, useState } from 'react';
import LineChart from './component/lineChart';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
      fetch('https://backend-api-wkr8.onrender.com/orders')
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
