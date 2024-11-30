"use client";

import { Banner } from "@/app/components/banner";
import { Footer } from "@/app/components/footer";
import { Menu } from "@/app/components/nav";


export default function Home() {
  
  return (
    <>
      <Menu></Menu>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
}