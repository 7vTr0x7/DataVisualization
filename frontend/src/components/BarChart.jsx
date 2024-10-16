import React from "react";

import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["A", "B", "C", "D", "E", "F"],
    datasets: [{ label: "Title", data: [10, 20, 30, 40, 50, 60] }],
    backgroundColor: "#61DBFB",
  };

  const options = {
    indexAxis: "y",
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
