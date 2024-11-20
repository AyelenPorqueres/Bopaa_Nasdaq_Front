'use client'

import React from "react";
import Chart from "react-google-charts";

 export function PieChart() {
    const data = [
      ["Task", "Hours per Day"],
      ["Work", 9],
      ["Eat", 2],
      ["Commute", 2],
      ["Watch TV", 2],
      ["Sleep", 7],
    ];
  
    const options = {
      title: "My Daily Activities",
      backgroundColor: 'transparent',

    };
    return (
    <div className="mb-7 mr-6 bg-[#dbe8f5]  shadow-lg rounded w-[40%]">
    
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
    );

  }

