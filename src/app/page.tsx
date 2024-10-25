"use client";

import { Banner } from "./components/banner";
import { Carousel } from "./components/carousel";
import { Footer } from "./components/footer";
import { LineChart } from "./components/linechart";
import { Menu } from "./components/nav";


export default function Home() {



  return (
    <>
      <Menu></Menu>
      <Banner></Banner>
      <Carousel></Carousel>
      <LineChart></LineChart>
      <Footer></Footer>

   
    </>
  );
}