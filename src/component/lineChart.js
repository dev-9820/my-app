import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://backend-api-5j20.onrender.com/orders')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.error('Error FUCKING data:', error));
    }, []);

    


    const chartData = {
        labels: ['2021-Q1', '2021-Q2', '2021-Q3', '2021-Q4', '2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2'],
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
                text: 'Quaterly Sales Growth',
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

export default LineChart;
