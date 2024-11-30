'use client'
import { AxiosResponse } from 'axios';
import clientAxios from './axios';

export const getDataEmpresas = async (): Promise<any> => {
    try {        
        const response: AxiosResponse<any, any> = await clientAxios.get('empresa/cotizacionActual');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getDataGraficos = async (codEmpresa: string, cantDias: number): Promise<any> => {
    try {        
        const response: AxiosResponse<any, any> = await clientAxios.get(`empresa/${codEmpresa}/ultima`,{params: {dias:cantDias}});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}