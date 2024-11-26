'use client'


import React from 'react';
import { Line } from 'react-chartjs-2';
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
import { useTranslation } from 'next-i18next';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export const LineChart = (props:any) =>{
  const {t} = useTranslation();
  const {selectedCard} = props;
  const options = {
   backgroundColor: '#dbe8f5',
  }

 
  return (
    <>
    <div className="mb-10 mt-5 bg-[rgb(243,246,249)] ml-6 mr-6 shadow-lg rounded w-[60%] ">
      <div className=" flex justify-between">
        <div className="flex">
        <img src={selectedCard.image} alt="" className="w-16 h-16 ml-2" />
        <p className="self-center ml-3 text-lg font-bold">{selectedCard.name}</p>
        </div>
        <div className="flex-none  mr-4">
          <ul className="menu menu-horizontal px-1 space-x-3  ">
            <button className="btn h-9 rounded-lg border-solid border-2  border[#F3F6F9] bg-[#F3F6F9] shadow-md">{t('buttons.day')}</button>
            <button className="btn h-9 rounded-lg border-solid border-2  border[#F3F6F9] bg-[#F3F6F9] shadow-md">{t('buttons.month')}</button>
          </ul>
        </div>
      </div>
      <div className="h-[2px] bg-slate-400 ml-2 mr-2"></div>
      <div className=' p-5'>
      <Line options={options} data={data} />
      </div>
    </div>
    </>
  

  );
}






