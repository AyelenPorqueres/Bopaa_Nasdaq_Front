'use client'

import React from "react";
import { Chart } from "react-google-charts";


const data = [
  ["x", "dogs"],
  [0, 0],
  [1, 10],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 27],
  [8, 33],
  [9, 40],
  [10, 32],
  [11, 35],
];

const options = {
  title: "Line Chart Example",
  hAxis: { title: "Time" },
  vAxis: { title: "Popularity" },
  legend: "none",
};




export function LineChart() {
  const options = {
   backgroundColor: '#dbe8f5',
  }
 
  return (
    <div className="mb-7 bg-[#dbe8f5] ml-6 mr-6 shadow-lg rounded w-[60%] ">
      <div className=" flex justify-between">
        <div className="flex">
        <img src="../images/amazon.ico" alt="" className="w-16 h-16 ml-2" />
        <p className="self-center ml-3 text-lg font-bold">AMAZON</p>
        </div>
        <div className="flex-none  mr-4">
          <ul className="menu menu-horizontal px-1 space-x-3  ">
            <button className="btn h-9 rounded-lg border-solid border-2  border[#F3F6F9] bg-[#F3F6F9] shadow-md">Día</button>
            <button className="btn h-9 rounded-lg border-solid border-2  border[#F3F6F9] bg-[#F3F6F9] shadow-md">Mes</button>
          </ul>
        </div>
      </div>
      <div className="h-[2px] bg-slate-400 ml-2 mr-2"></div>

      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}

      />
    </div>
    


  );
}






