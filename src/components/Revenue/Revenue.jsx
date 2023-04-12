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
import { IoMdAddCircle, IoIosRemoveCircle } from "react-icons/io";
import AddButton from '../Button/AddButton';
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
            display: false,
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
            grid: {
                display: false
            }
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
            label: 'First Dataset',
            data: [46200, 106800, 181800, 272700, 390300],
            borderColor: '#14937e',
            backgroundColor: 'rgba(164, 213, 205, 0.5)',
        },
    ],
};


 function RevenueChart() {
    return (
             <div className="bg-white mt-4 rounded-lg py-4 px-4">
                            <h2 className="font-semibold text-black text-lg">Revenue Timeline</h2>
                            <div className="py-3">
            <div>
                <Line
                    options={options}
                    data={data}
                    height={400}
                    width={600} />
            </div>
        </div>
            <div>
                      <AddButton
                                        title="Add year"
                                        icon={
                                            <IoMdAddCircle className="text-customGreen-200" size="1.5rem" />
                                        }
                                    
                                    />
                      <AddButton
                                        title="Remove year"
                                        icon={
                                            <IoIosRemoveCircle className="text-customGreen-200" size="1.5rem" />
                                        }
                                      
                                    />
            </div>
        </div>
    )
};

export default RevenueChart;





