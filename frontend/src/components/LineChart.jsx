import React from "react";
import { Line } from "react-chartjs-2";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { lineData } from "../utils/constants";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const maxLine = lineData().reduce((acc, curr) =>
  acc.value < curr.value ? curr : acc
);

const LineChart = () => {
  const data = {
    labels: lineData().map((data) => data.date.slice(0, 10)),
    datasets: [{ label: "Title", data: lineData().map((data) => data.value) }],
    backgroundColor: "aqua",
    borderColor: "black",
    fill: true,
  };
  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        max: maxLine.value + 100,
      },
    },
  };
  return (
    <div className="h-[500px] w-[500px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
