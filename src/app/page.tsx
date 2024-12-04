"use client";

import { Menu } from "./components/nav";
import { Banner } from "./components/banner";
import { Carousel } from "./components/carousel";
import { LineChart } from "./components/lineCharts";
import { Footer } from "./components/footer";
import { useEffect, useState } from "react";
import { PieChart } from "./components/pieChart";
import { getDataEmpresas } from "./services/empresas";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<any>();
 
  useEffect(() => {
    getAllEmpresas()
  }, []);

  const cantDias = 5;

  const [empresas, setEmpresas] = useState([])
  const getAllEmpresas = async () => {

    const empresas = await getDataEmpresas();
    console.log(getAllEmpresas);
    setEmpresas(empresas);
    
  }

  const onSelectedCard = (card: any) => {
    console.log(card);
    if (card == undefined){
      setSelectedCard(empresas[0])
    }
    setSelectedCard(card)
  }

 
  

  return (
    <>

      <Menu></Menu>
      <Banner></Banner>
      {empresas !== undefined && <Carousel empresas={empresas} selectedCard={selectedCard} onSelectedCard={(card: any) => onSelectedCard(card)}></Carousel> }
      <div className="flex">
        <LineChart selectedCard={selectedCard} cantDias={cantDias} empresas={empresas}></LineChart>
        <PieChart></PieChart>
      </div>
      <Footer></Footer>

    </>
  );
}