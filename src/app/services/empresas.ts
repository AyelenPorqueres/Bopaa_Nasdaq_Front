'use client'
import { AxiosResponse } from 'axios';
import clientAxios from './axios';


//Realizo una funcion para obtener los datos de las ultimas cotizaciones de todas las empresas.
export const getDataEmpresas = async (): Promise<any> => {
    try {        
        const response: AxiosResponse<any, any> = await clientAxios.get('empresa/cotizacionActual');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//Realizo una funcion para obtener los datos del graficos de una empresa en especifica
export const getDataGraficos = async (codEmpresa: string, cantDias: number): Promise<any> => {
    try {        
        const response: AxiosResponse<any, any> = await clientAxios.get(`empresa/${codEmpresa}/ultima`,{params: {dias:cantDias}});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//Realizo una funcion para obtener los datos de la participacion de las empresas en el mercado.
export const getDataParticipacion = async (): Promise<any> => {
    try {        
        const response: AxiosResponse<any, any> = await clientAxios.get('empresa/participacionEmpresas');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}