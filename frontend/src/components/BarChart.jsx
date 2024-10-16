import React, { useRef } from "react";

import { Bar, getElementAtEvent } from "react-chartjs-2";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { barData, selectedBar } from "../utils/constants";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: barData()
      .map((data) => data.category)
      .reverse(),
    datasets: [
      {
        label: "Title",
        data: barData()
          .map((data) => data.value)
          .reverse(),
      },
    ],
    backgroundColor: "#61DBFB",
  };

  const options = {
    indexAxis: "y",
  };

  const barRef = useRef();
  const clickHandler = (e) => {
    const elements = getElementAtEvent(barRef.current, e);
    if (elements.length > 0) {
      const index = elements[0].index;
      const selected = selectedBar(index);
      console.log(selected);
    }
  };

  return (
    <div className="h-[500px] w-[500px]">
      <Bar data={data} options={options} onClick={clickHandler} ref={barRef} />
    </div>
  );
};

export default BarChart;
