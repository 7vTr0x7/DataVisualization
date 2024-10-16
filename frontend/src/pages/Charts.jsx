import Chart from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";
import React from "react";
import BarChart from "../components/BarChart";
import Filters from "../components/Filters";

Chart.register(zoomPlugin);

const data = [
  {
    day: "2022-04-10T00:00:00.000Z",
    age: "15-25",
    gender: "Male",
    b: 92,
    c: 413,
    d: 988,
    e: 709,
    f: 175,
  },
  {
    day: "2022-04-10T00:00:00.000Z",
    age: ">25",
    gender: "Male",
    a: 736,
    b: 107,
    c: 607,
    d: 15,
    e: 606,
    f: 70,
  },
  {
    day: "2022-05-10T00:00:00.000Z",
    age: "15-25",
    gender: "Male",
    a: 176,
    b: 841,
    c: 472,
    d: 96,
    e: 756,
    f: 953,
  },
  {
    day: "2022-05-10T00:00:00.000Z",
    age: ">25",
    gender: "Male",
    a: 673,
    b: 687,
    c: 826,
    d: 822,
    e: 452,
    f: 395,
  },
];

const Charts = () => {
  return (
    <div className="flex items-center justify-center mt-10 ">
      <div>
        <Filters />
        <div className="mt-5">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Charts;
