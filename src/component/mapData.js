import React, { useEffect, useState } from 'react';

import { Container } from './styles';

function MapData() {

    const [mapdata, setMapdata] = useState([]);
    
    useEffect(() => {
        fetch('https://backend-api-2-buio.onrender.com/')
            .then(response => response.json())
            .then(data => {
                setMapdata(mapdata);
            })
            .catch(error => console.error('Error FUCKING data:', error));
    }, []);



  return (
    <div>

    </div>
  )
}

export default MapData;