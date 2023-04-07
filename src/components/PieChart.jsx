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
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right'
        }
    }
}

export default function PieChart() {
    return (
        <>
            <Doughnut data={data} />
        </>
    )
};
