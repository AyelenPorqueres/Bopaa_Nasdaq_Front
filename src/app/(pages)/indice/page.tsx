"use client";

import { Banner } from "@/app/components/banner";
import { Footer } from "@/app/components/footer";
import { LineChartIndex } from "@/app/components/lineChartIndex";
import { Menu } from "@/app/components/nav";


export default function Home() {
  
  return (
    <>
      <Menu></Menu>
      <Banner></Banner>
      <LineChartIndex selectedCard={"NDX"} cantDias={5}></LineChartIndex>
      <Footer></Footer>
    </>
  );
}