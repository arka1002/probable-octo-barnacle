import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Founders', 'Investors', 'Employees'],
    datasets: [
        {
            data: [68488, 31512, 0],
            backgroundColor: [
                '#0e7469',
                '#1fc39e',
                '#d8e9e7'
            ],
            borderColor: [
                '#0e7469',
                '#1fc39e',
                '#d8e9e7'
            ],
            borderWidth: 1,
        },
    ],
};

export const options = {
    maintainAspectRatio: false,
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
        <div className='font-bold'>Cap Tables</div>
            <div><Pie
                data={data}
                options={options}
                height={280}
                width={385} />
            </div>
        </div>
    )
};
