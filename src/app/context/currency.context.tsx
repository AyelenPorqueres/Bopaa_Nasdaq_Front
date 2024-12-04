'use client'


import React, { createContext, useContext, useState } from "react";


//Realizo un context para gestionar y acceder a los datos de la moneda seleccionada y su tasa de conversion.
//Genero una funcion para cambiar la moneda seleccionada y actualizar la tasa de conversion de manera centralizada
interface CurrencyContextType {
  currency: string;
  conversionRate: number;
  changeCurrency: (newCurrency: string) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState("$USD");
  const [conversionRate, setConversionRate] = useState(1);

  const changeCurrency = (newCurrency: string) => {
    if (newCurrency === "$USD") {
      setConversionRate(1);
    } else if (newCurrency === "€EUR") {
      setConversionRate(0.95);
    }
    setCurrency(newCurrency);
  };

  return (
    <CurrencyContext.Provider value={{ currency, conversionRate, changeCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};