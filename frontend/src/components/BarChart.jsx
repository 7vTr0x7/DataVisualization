import React from "react";

import { Bar } from "react-chartjs-2";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { barData } from "../utils/constants";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: barData.map((data) => data.category).reverse(),
    datasets: [
      { label: "Title", data: barData.map((data) => data.value).reverse() },
    ],
    backgroundColor: "#61DBFB",
  };

  const options = {
    indexAxis: "y",
  };

  return (
    <div className="h-[500px] w-[500px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
