import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useTranslation } from 'next-i18next';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Amazon', 'Google', 'Meta', 'Microsoft', 'Novartis', 'Pepsi', 'Visa', 'Walmart'],
  datasets: [
    {
      label: '',
      data: [20, 15, 10, 25, 5, 10, 8, 7],
      backgroundColor: [
        'rgba(242,163,32)',//amazon
        'rgba(216,65,46,255)',//google
        'rgba(39,126,217)',//meta
        'rgba(140,196,63)',//microsoft
        'rgba(226,75,30,255)',//novartis
        'rgba(1,75,148,255)',//pepsi
        'rgba(5,107,179,255)',//visa
        'rgba(254,186,51,255)',//walmart
      ],
      borderColor: [
        'rgba(242,163,32)',//amazon
        'rgba(216,65,46,255)',//google
        'rgba(39,126,217)',//meta
        'rgba(140,196,63)',//microsoft
        'rgba(226,75,30,255)',//novartis
        'rgba(1,75,148,255)',//pepsi
        'rgba(5,107,179,255)', //visa
        'rgba(254,186,51,255)',//walmart
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  const { t } = useTranslation();
  return (
    <div className="mb-10 mr-6 mt-5 bg-[rgb(243,246,249)] shadow-lg rounded w-[40%]">
      <p className='pt-5 ml-2 text-lg font-bold'>{t('titlePie')}</p>
      <div className="h-[1px] bg-slate-400 ml-2 mr-2 mt-2"></div>
      <div className='w-[480px] h-[480px] ml-10 p-9'>
        <Pie
          data={data}
          options={{
            plugins: {
              legend: {
                position: 'right',

                labels: {
                  padding: 15,
                  usePointStyle: true,
                  pointStyle: 'circle',
                  font: {
                    size: 15, 
                  }
                }
              }
            }
          }
          }

        />
      </div>
    </div>

  )
}