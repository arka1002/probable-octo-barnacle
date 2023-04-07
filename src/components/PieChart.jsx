import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Revenue', 'Cost'],
    datasets: [
        {
            data: [46200, 1424],
            backgroundColor: [
                '#0e7469',
                '#cfd8dc'
            ],
            borderColor: [
                '#0e7469',
                '#cfd8dc'
            ],
            borderWidth: 1,
        },
    ],
};

export const options = {
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
        legend: {
            position: 'right',
            boxWidth: 10,
            usePointStyle: true,
            pointStyle: 'circle',
            labels: {
                usePointStyle: true,
            },
        }
    }
}

export default function PieChart() {
    return (
        <div className='p-4 rounded-xl shadow-lg'>
        <div className='font-bold'>Revenue vs Cost</div>
            <div><Doughnut
                data={data}
                options={options}
                height={280}
                width={385} />
            </div>
        </div>
    )
};
