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
import { getDataGraficosIndices } from '../services/indice'



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
    selectedCard: any; cantDias: number;
}

const generarColorAleatorio = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, 1)`;
  };


  const fetchChartData = async ( dias: number, setChartData: React.Dispatch<React.SetStateAction<ChartData | null>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    setLoading(true);

    try {
        console.log(dias)
        const data = await getDataGraficosIndices( dias, 1);
        console.log(data)
        let labels: any[] = [];
        data[0].map((dato: any) => {
          if(dato.hora == '09:00') {
            const label = `${dato.fecha.substring(8,10)}-${dato.fecha.substring(5,7)} ${dato.hora.substring(0,2)}hs`
            labels.push(label);
          } else {
            const label = `${dato.hora.substring(0,2)}hs`
            labels.push(label);
          }
        })
        const datasets = data.map((dataset:any) => {
          let data:number[] = [];
          dataset.forEach((dato:any) => {
            data.push(dato.valorIndice);
          });
    
          return {
            label: dataset[0].codigoIndice,
            data: data,
            borderColor: dataset[0].codigoIndice == 'NDX' ? '#4984bf' :generarColorAleatorio(),
            backgroundColor: generarColorAleatorio().replace('1)', '0.2)'),
          }
        })

        setChartData({
            labels,
            datasets: datasets,
        });
        setLoading(false);
    } catch (error) {
        console.error('Error fetching chart data:', error);
        setLoading(false);
    }
};


export const LineChartIndex: React.FC<LineChartProps> = ({  cantDias }) => {
    const { t } = useTranslation();
    const [chartData, setChartData] = useState<ChartData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (cantDias) {
            fetchChartData(cantDias, setChartData, setLoading);

        }
    }, [cantDias]);

    if (loading || !chartData) {
        return (
            <div className='w-[500px]'>
                <p >Seleccione una empresa..</p>
            </div>
        )
    }


    return (
        <>
            <div className="mb-10 mt-5 bg-[rgb(243,246,249)] ml-6 mr-6 shadow-lg rounded  flex flex-col">
                <div className=" flex ">
                    <p className='text-lg font-bold self-center pl-4'>{t('titleIndex')}</p>

                <div className="flex-1"></div>
                    <div className="flex  mr-2">
                        <ul className="menu menu-horizontal px-1  space-x-3">
                            <button
                                className="btn h-9 rounded-lg border-solid border-2 border[#F3F6F9] bg-[#F3F6F9] shadow-md"
                                onClick={() => fetchChartData( 1, setChartData, setLoading)} // Cambia a 1 día
                            >
                                {t('buttons.day')}
                            </button>
                            <button
                                className="btn h-9 rounded-lg border-solid border-2 border[#F3F6F9] bg-[#F3F6F9] shadow-md"
                                onClick={() => fetchChartData( 30, setChartData, setLoading)} // Cambia a 30 días
                            >
                                {t('buttons.month')}
                            </button>
                        </ul>
                    </div>
                </div>
                <div className="h-[1px] bg-slate-400 ml-2 mr-2"></div>
                <div className=' flex p-5 w-[100%] h-[450px] justify-center'>
                    <Line options={options} data={chartData} />
                </div>
            </div>
        </>

    );
}






