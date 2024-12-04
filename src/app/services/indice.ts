'use client'
import { AxiosResponse } from 'axios';
import clientAxios from './axios';

//Realizo una funcion para obtener los datos de los indices.
export const getDataIndices = async (): Promise<any> => {
    try {
        const response: AxiosResponse<any, any> = await clientAxios.get('indices/getIndices');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//Realizo una funcion que obtiene las cotizaciones de los indices dependiendo de los dias y los indices seleccionados.
export const getDataGraficosIndices = async (dias: number, allIndices: number): Promise<any> => {
    try {
        const response: AxiosResponse<any, any> = await clientAxios.get('indices/getCotizaciones', { params: { dias: dias, allIndices: allIndices } });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}