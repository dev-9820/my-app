import './App.css';
import React, { useEffect, useState } from 'react';
import LineChart from './component/lineChart';
import WorldMap from 'react-svg-worldmap';

function App() {


  const [data, setData] = useState([]);

  useEffect(() => {
      fetch('https://backend-api-wkr8.onrender.com/orders')
          .then(response => response.json())
          .then(data => setData(data));
        }, []);

        const mapData  = [
          { country: "cn", value: 1389618778 }, // china
          { country: "in", value: 1311559204 }, // india
          { country: "us", value: 331883986 }, // united states
          { country: "id", value: 264935824 }, // indonesia
          { country: "pk", value: 210797836 }, // pakistan
          { country: "br", value: 210301591 }, // brazil
          { country: "ng", value: 208679114 }, // nigeria
          { country: "bd", value: 161062905 }, // bangladesh
          { country: "ru", value: 141944641 }, // russia
          { country: "mx", value: 127318112 }, // mexico
        ];
      
        

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='div-header'>Data Visualisation</h1>
        <div className='container'>
          <div className='chart'><LineChart/></div>
          <div className='chart'><LineChart/></div>
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
