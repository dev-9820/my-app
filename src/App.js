import './App.css';
import React, { useEffect, useState } from 'react';
import LineChart from './component/lineChart';
import WorldMap from 'react-svg-worldmap';
import SecondlineChart from './component/secondLinechart';

function App() {


  const [data, setData] = useState([]);

  useEffect(() => {
      fetch('https://backend-api-wkr8.onrender.com/')
          .then(response => response.json())
          .then(data => setData(data));
        }, []);

        const mapData  = [
          { country: "cn", value: "- 101" }, // china
          { country: "in", value: "- 76" }, // india
          { country: "us", value: "- 10" }, // united states
          { country: "id", value: "- 97" }, // indonesia
          { country: "pk", value: "- 167" }, // pakistan
          { country: "br", value: "- 65" }, // brazil
          { country: "ng", value: "- 25" }, // nigeria
          { country: "bd", value: "- 201" }, // bangladesh
          { country: "ru", value: "- 324" }, // russia
          { country: "mx", value: "- 156" }, // mexico
        ];
      
        

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='div-header'>Data Visualisation</h1>
        <div className='container'>
          <div className='chart'><LineChart/></div>
          <div className='chart'><SecondlineChart/></div>
        </div>
        <h3 style={{marginTop:'100px'}} className='div-header'>Geographical Sales Over World</h3>
        <div>
        <WorldMap
        backgroundColor='rgba(55, 77, 77, 0)'
        borderColor='white'
        color="blue"
        value-suffix="people"
        size="xxl"
        data={mapData}
      />
      </div>
      </header>
    </div>
  );
}

export default App;
