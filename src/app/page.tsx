"use client";

import { Menu } from "./components/nav";
import { Banner } from "./components/banner";
import { Carousel } from "./components/carousel";
import { LineChart } from "./components/lineCharts";
import { PieChart } from "./components/pieChart";
import { Footer } from "./components/footer";



export default function Home() {

  return (
    <>
      <Menu></Menu>
      <Banner></Banner>
      <Carousel></Carousel>
      <div className="flex">
      <LineChart></LineChart>
      <PieChart></PieChart>
      </div>
      <Footer></Footer>
    </>
  );
}