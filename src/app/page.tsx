"use client";

import { Menu } from "./components/nav";
import { Banner } from "./components/banner";
import { Carousel } from "./components/carousel";
import { LineChart } from "./components/lineCharts";
import { Footer } from "./components/footer";
import { useState } from "react";
import { PieChart } from "./components/pieChart";




export default function Home() {
  const [selectedCard, setSelectedCard] = useState<any>({ id: 1, title: "AMZN", name: "AMAZON", image: '../images/amazon.ico' });

  const onSelectedCard=(card:any) =>{
    console.log(card);
    setSelectedCard(card)
  }

  

  return (
    <>
      <Menu></Menu>
      <Banner></Banner>
      <Carousel selectedCard= {selectedCard} onSelectedCard = {(card:any)=> onSelectedCard(card)}></Carousel>
      <div className="flex">
      <LineChart selectedCard={selectedCard}></LineChart>
      <PieChart></PieChart>
      </div>
      <Footer></Footer>
    </>
  );
}