'use client'


import React, { useEffect, useState } from 'react';
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
import { getDataGraficos } from '../services/empresas'



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

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
  }[];
}

interface LineChartProps {
  selectedCard: any; cantDias: number;
}
const fetchChartData = async (codEmpresa: string, dias: number, setChartData: React.Dispatch<React.SetStateAction<ChartData | null>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  setLoading(true);
  try {
    const data = await getDataGraficos(codEmpresa, dias);
    console.log (data)
    const labels = data.map((item: any) => item.fecha);
    const dataset = data.map((item: any) => item.cotization); // Asegúrate de que 'cotizacion' coincide con la respuesta de la API

    setChartData({
      labels,
      datasets: [
        {
          label: 'Cotizaciones',
          data: dataset,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          fill: true,
        },
      ],
    });
    setLoading(false);
  } catch (error) {
    console.error('Error fetching chart data:', error);
    setLoading(false);
  }
};


export const LineChart: React.FC<LineChartProps> = ({ selectedCard, cantDias }) => {
  const { t } = useTranslation();
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    if (selectedCard && cantDias) {
      fetchChartData(selectedCard.title, cantDias, setChartData, setLoading);
      
    }
  }, [selectedCard, cantDias]);

  if (loading || !chartData) {
    return(
    <div className='w-[500px]'>
      <p >Seleccione una empresa..</p>
    </div>
    )
  }


  return (
    <>
      <div className="mb-10 mt-5 bg-[rgb(243,246,249)] ml-6 mr-6 shadow-lg rounded w-[60%] flex flex-col">
        <div className=" flex justify-between">
          <div className="flex">
            <img src={selectedCard.image} alt="" className="w-16 h-16 ml-2" />
            <p className="self-center ml-3 text-lg font-bold">{selectedCard.name}</p>
            <p className="self-center ml-3 text-lg ">205.74 USD</p>
          </div>
          <div className="flex-none  mr-4">
          <ul className="menu menu-horizontal px-1 space-x-3">
            <button
              className="btn h-9 rounded-lg border-solid border-2 border[#F3F6F9] bg-[#F3F6F9] shadow-md"
              onClick={() => fetchChartData(selectedCard.title, 1, setChartData, setLoading)} // Cambia a 1 día
            >
              {t('buttons.day')}
            </button>
            <button
              className="btn h-9 rounded-lg border-solid border-2 border[#F3F6F9] bg-[#F3F6F9] shadow-md"
              onClick={() => fetchChartData(selectedCard.title, 30, setChartData, setLoading)} // Cambia a 30 días
            >
              {t('buttons.month')}
            </button>
          </ul>
        </div>
        <div className="h-[2px] bg-slate-400 ml-2 mr-2"></div>
        
      </div>
      <div className=' p-5 w-[100%]'>
          <Line options={options} data={chartData} />
      </div>
    </div>
    </>

  );
}






