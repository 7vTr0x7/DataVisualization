import React from "react";
import { Line } from "react-chartjs-2";

import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["A", "B", "C", "D", "E", "F"],
    datasets: [{ label: "Title", data: [10, 5, 20, 10, 50, 30] }],
    backgroundColor: "aqua",
    borderColor: "black",
    fill: true,
  };
  const options = {
    plugins: {
      legend: true,
    },
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
