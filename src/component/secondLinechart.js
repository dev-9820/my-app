import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function SecondlineChart() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://backend-api-wkr8.onrender.com/')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.error('Error FUCKING data:', error));
    }, []);

    

    


    const chartData = {
        labels: ['2021', '2022', '2023', '2024'],
        datasets: [
            {
                label: 'Total Sales',
                data: data.map(item => item.total_price),
                borderColor: 'rgba(75,192,192,1)',  
                backgroundColor: 'rgba(75,192,192,0.2)',
                pointHoverBorderColor:'rgba(67, 168, 94)',
                pointHoverRadius:'8',
                borderWidth:'2',
            },
        ],
    };

    const options = {
        responsive:true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Yearly Sales Growth',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Sales',
                },
            },
        },
    };

    return (
        <div>
            <Line  data={chartData} options={options} />
        </div>
    );
}

export default SecondlineChart;
