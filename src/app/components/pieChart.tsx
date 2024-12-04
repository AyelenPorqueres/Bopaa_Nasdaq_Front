import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useTranslation } from 'next-i18next';
import { getDataParticipacion } from '../services/empresas';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {

  //Hook del traductor.
  const { t } = useTranslation();

  //Implemento estados para manejar los datos del grafico.
  const [dataset, setDataset] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [datos, setDatos] = useState<any[]>([]);

  //Realizo una funcion para obtener los datos desde el servico.
  const obtenerDatosPieChart = async () => {
    const datos = await getDataParticipacion();
    console.log("datos", datos)

    let labels: string[] = []
    let dataset: number[] = []
    datos.map((empresa: any) => {
      labels.push(`${empresa.codEmpresa} ${empresa.participacionMercado}%`);
      dataset.push(empresa.participacionMercado);
    })

    setDataset(dataset);
    setLabels(labels);
    setDatos(datos);
  }

  //Realizo un hook para llamar a la funcion y cargar los datos del grafico.
  useEffect(() => {
    obtenerDatosPieChart();
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: `${t('titlePie')}`,
        data: dataset,
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