import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// initialising the chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
);
// set `maintainAspectRatio: false` to give the height & width  
export const options = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            boxWidth: 10,
            usePointStyle: true,
            pointStyle: 'circle',
            labels: {
                usePointStyle: true,
            },
        },
        title: {
            display: false
        },
    },
    scales: {
        x: {
            display: false,
        },
        y: {
            suggestedMin: 10,
            suggestedMax: 40,
            grid: {
                borderDash: [8, 4],
                drawBorder: false,
            },
            ticks: {
                padding: 18,
                beginAtZero: false,
                // tickWidth : ,
                
            },
        },
    },
};


const labels = ['2023', '2024', '2025', '2026', '2027'];
export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Expenses Data',
            data: [0, 0, 0, 0, 0],
            borderColor: '#ff0000',
            backgroundColor: '#ffacac',
        },
        {
            fill: true,
            label: 'Revenue Data',
            data: [46200, 106800, 181800, 272700, 390300],
            borderColor: '#14937e',
            backgroundColor: 'rgba(164, 213, 205, 0.5)',
        },
    ],
};


export default function HeadBar() {
    return (
        <>
            
            <Line
                options={options}
                data={data}
                height={400} 
                width={600}/>
        </>
    )
};
