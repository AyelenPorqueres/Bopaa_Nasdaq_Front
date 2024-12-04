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
import { getDataGraficos } from '../services/empresas';
import { useCurrency } from '../context/currency.context';



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
  selectedCard: any; cantDias: number; empresas: any;
}
const fetchChartData = async (codEmpresa: string, dias: number, setChartData: React.Dispatch<React.SetStateAction<ChartData | null>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  setLoading(true);
  try {
    const data = await getDataGraficos(codEmpresa, dias);
    console.log (data)
    const labels = data.map((item: any) => item.fecha);
    const dataset = data.map((item: any) => item.cotization); 

    setChartData({
      labels,
      datasets: [
        {
          label: codEmpresa,
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


export const LineChart: React.FC<LineChartProps> = ({ selectedCard, cantDias,empresas}) => {
  const { t } = useTranslation();
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const { conversionRate, currency } = useCurrency();


  useEffect(() => {
   
    if (selectedCard && cantDias) {
      fetchChartData(selectedCard.codEmpresa, cantDias, setChartData, setLoading);
      
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
      <div className="mb-10 mt-5 bg-[rgb(243,246,249)] ml-6 mr-6 shadow-lg w-[60%] rounded flex flex-col">
        <div className=" flex justify-between items-center p-3">
          <div className="flex items-center space-x-3">
            <img src={`../images/${selectedCard.codEmpresa}.ico`} alt="" className="w-16 h-16 ml-2" />
            <p className="self-center ml-3 text-lg font-bold">{selectedCard.codEmpresa}</p>
            <p className="self-center ml-3 text-lg ">{(Number(selectedCard.ultimaCot)*conversionRate).toFixed(2)} {currency}
            </p>
          </div>
          <div className="flex space-x-3 justify-end">
        
            <button
              className="btn h-9 rounded-lg border-solid border-2 border[#F3F6F9] bg-[#F3F6F9] shadow-md"
              onClick={() => fetchChartData(selectedCard.codEmpresa, 1, setChartData, setLoading)} // Cambia a 1 día
            >
              {t('buttons.day')}
            </button>
            <button
              className="btn h-9 rounded-lg border-solid border-2 border[#F3F6F9] bg-[#F3F6F9] shadow-md"
              onClick={() => fetchChartData(selectedCard.codEmpresa, 30, setChartData, setLoading)} // Cambia a 30 días
            >
              {t('buttons.month')}
            </button>
          
        </div>
        
      </div>
      <div className="h-[1px] bg-slate-400 ml-2 mr-2"></div>

      <div className=' p-5 w-[100%]'>
          <Line options={options} data={chartData} />
      </div>
    </div>
    </>

  );
}






